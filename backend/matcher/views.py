import requests
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.conf import settings
from .models import User, Candidate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
import math


# Create your views here.
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


@api_view(['POST'])
def kakao_login(request):
    code = request.data.get('code')
    if not code:
        return Response({'error': 'No code provided'}, status=400)

    try:
        # 카카오 토큰 요청
        token_res = requests.post('https://kauth.kakao.com/oauth/token', data={
            'grant_type': 'authorization_code',
            'client_id': settings.KAKAO_CLIENT_ID,
            'redirect_uri': settings.KAKAO_REDIRECT_URI,
            'code': code,
            'client_secret': settings.KAKAO_SECRET_CODE
        })

        token_res.raise_for_status()
        access_token = token_res.json().get('access_token')
        if not access_token:
            return Response({'error': 'Failed to get access token'}, status=400)

        # 사용자 정보 요청
        user_info_res = requests.get(
            'https://kapi.kakao.com/v2/user/me',
            headers={'Authorization': f'Bearer {access_token}'}
        )
        user_info_res.raise_for_status()
        user_info = user_info_res.json()

        kakao_id = user_info.get('id')
        nickname = user_info.get("kakao_account", {}).get("profile", {}).get("nickname")

        if not kakao_id or not nickname:
            return Response({'error': 'Invalid user info from Kakao'}, status=400)

        user, created = User.objects.get_or_create(
            kakao_id=kakao_id,
            defaults={
                'nickname': nickname,
                'username': f'kakao_{kakao_id}'
            }
        )

        if not created and not user.username:
            user.username = f'kakao_{kakao_id}'
            user.save()

        tokens = get_tokens_for_user(user)

        return Response({
            'access_token': tokens['access'],
            'refresh_token': tokens['refresh'],
            'nickname': user.nickname,
            'ideology': user.ideology,
            'policyMatch': user.policy_match,
        })
    
    except requests.exceptions.RequestException as e:
        return Response({'error': 'Kakao API request failed', 'detail': str(e)}, status=500)
    except Exception as e:
        return Response({'error': 'Server error', 'detail': str(e)}, status=500)

# 후보자 벡터
CANDIDATE_VECTORS = {
    "이재명": [5, 2, 5, 2, 4, 3, 5, 4, 5, 2, 2, 2, 3, 5, 5],
    "김재연": [5, 1, 5, 1, 5, 1, 5, 5, 5, 1, 1, 1, 3, 5, 5],
    "김문수": [2, 5, 2, 5, 2, 5, 3, 2, 2, 5, 5, 5, 4, 2, 2],
    "이준석": [3, 4, 3, 4, 3, 4, 3, 3, 3, 4, 4, 4, 5, 3, 3],
}

# 코사인 유사도 함수
def cosine_similarity(v1, v2):
    dot = sum(a * b for a, b in zip(v1, v2))
    norm1 = math.sqrt(sum(a ** 2 for a in v1))
    norm2 = math.sqrt(sum(b ** 2 for b in v2))
    return dot / (norm1 * norm2) if norm1 and norm2 else 0

# 정치 성향 분류 함수
def classify_ideology(user_vector):
    # 진보 성향: q1, q3, q5, q8, q9, q14, q15
    # 보수 성향: q2, q4, q6, q10, q11, q12
    # 중도 관련 q13은 제외

    progressive_indices = [0, 2, 4, 7, 8, 13, 14]
    conservative_indices = [1, 3, 5, 9, 10, 11]

    progressive_score = sum(user_vector[i] for i in progressive_indices)
    conservative_score = sum(6 - user_vector[i] for i in conservative_indices)
    total_score = progressive_score + conservative_score
    ideology_score = total_score / (len(progressive_indices) + len(conservative_indices))

    if ideology_score >= 4.5:
        return "강한 진보"
    elif ideology_score >= 3.5:
        return "약한 진보"
    elif ideology_score >= 2.5:
        return "중도"
    elif ideology_score >= 1.5:
        return "약한 보수"
    else:
        return "강한 보수"

@api_view(['POST'])
def calculate_match(request):
    data = request.data

    # 사용자 응답 벡터 생성
    question_keys = [f"q{i}" for i in range(1, 16)]
    user_vector = [data.get(k, 3) for k in question_keys]  # 응답 없으면 중립값 3

    # 정치 성향 계산
    ideology = classify_ideology(user_vector)

    # 유사도 계산
    similarities = {
        name: cosine_similarity(user_vector, vector)
        for name, vector in CANDIDATE_VECTORS.items()
    }

    sorted_candidates = sorted(similarities.items(), key=lambda x: x[1], reverse=True)
    best_match = sorted_candidates[0][0]

    return Response({
        "ideology": ideology,
        "policyMatch": best_match,
        # "similarities": similarities,
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_test_result(request):
    ideology = request.data.get("ideology")
    policy_match = request.data.get("policyMatch")

    if not (ideology and policy_match):
        return Response({"error": "Invalid data"}, status=400)

    user = request.user
    user.ideology = ideology
    user.policy_match = policy_match
    user.save()

    return Response({"success": True})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_info(request):
    user = request.user
    return Response({
        "nickname": user.nickname,
        "ideology": user.ideology,
        "policyMatch": user.policy_match,
        "bookmarks": user.bookmarks,
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def toggle_bookmark(request):
    user = request.user
    policy_id = request.data.get('policy_id')
    if not isinstance(policy_id, int):
        return Response({'error': 'policy_id 는 int 값이어야 합니다.'}, status = 400)
    
    bookmarks = user.bookmarks or []

    if policy_id in bookmarks:
        bookmarks.remove(policy_id)
        bookmarked = False
    else:
        bookmarks.append(policy_id)
        bookmarked = True

    user.bookmarks = bookmarks
    user.save()

    return Response({'bookmarked': bookmarked})

@api_view(['POST'])
def cheer_candidate(request):
    name = request.data.get('name')
    if not name:
        return Response({'error': 'No candidate name provided'}, status=400)
    try:
        candidate = Candidate.objects.get(name=name)
        candidate.cheer_count += 1
        candidate.save()
        return Response({'success': True, 'cheerCount': candidate.cheer_count})
    except Candidate.DoesNotExist:
        return Response({'error': 'Candidate not found'}, status=404)
    
@api_view(['GET'])
def get_all_candidatee(request):
    candidates = Candidate.objects.all().order_by('-cheer_count')
    data = [
        {'name': c.name, 'cheerCount': c.cheer_count} for c in candidates
    ]
    return Response(data)