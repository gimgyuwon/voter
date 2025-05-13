import requests
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.conf import settings
from .models import User, Candidate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
import math

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
            'ideologyScore': user.ideology_score,
            'categoryScore': user.category_score,
            'policyMatch': user.policy_match,
            'top3': user.top3,
        })
    
    except requests.exceptions.RequestException as e:
        return Response({'error': 'Kakao API request failed', 'detail': str(e)}, status=500)
    except Exception as e:
        return Response({'error': 'Server error', 'detail': str(e)}, status=500)

# 후보자 벡터
CANDIDATE_VECTORS = {
    "김문수": [
            #13-17
            1, 3, 3, 3, 3,
            #18-21
            1, 2, 4, 4, 
            #22-25
            5, 5, 5, 5,
            ],
    "이준석": [
            #13-17
            5, 5, 5, 5, 5,
            #18-21
            1, 3, 3, 3,
            #22-25
            1, 3, 3, 3,
            ],
    "이재명": [
            #13-17
            2, 2, 2, 4, 3,
            #18-21
            5, 5, 5, 5,
            #22-25
            4, 3, 2, 2,
            ],
}

# 카테고리별 질문 인덱스 (0부터 시작)
CATEGORY_INDICES = {
    "복지·노동": [0, 2, ],
    "경제·산업": [-1, -7, 8, ],
    "안보·국방": [-3, -5, -9, ],
    "소수자·인권": [4, 6, 10, -11],
}

# 코사인 유사도 함수
def cosine_similarity(v1, v2):
    dot = sum(a * b for a, b in zip(v1, v2))
    norm1 = math.sqrt(sum(a ** 2 for a in v1))
    norm2 = math.sqrt(sum(b ** 2 for b in v2))
    return dot / (norm1 * norm2) if norm1 and norm2 else 0

# 정치 성향 점수 계산 (0: 강보수 ~ 10: 강진보)
def calculate_ideology_score(ideology_vector):
    progressive_indices = [0, 2, 4, 6, 8, 10]
    conservative_indices = [1, 3, 5, 7, 9, 11]

    prog_score = sum(ideology_vector[i] for i in progressive_indices)
    cons_score = sum(6 - ideology_vector[i] for i in conservative_indices)
    total_score = prog_score + cons_score
    return round((total_score / (len(progressive_indices) + len(conservative_indices))) * 2, 1)

# 카테고리별 점수 계산
def calculate_category_scores(policy_vector):
    result = {}
    for cat, indices in CATEGORY_INDICES.items():
        values = []
        for i in indices:
            if i >= 0:
                values.append(policy_vector[i])
            else:
                values.append(6 - policy_vector[abs(i)])
        result[cat] = round(sum(values) / len(values), 2) if values else None
    return result


@api_view(['POST'])
def calculate_match(request):
    data = request.data
    # 전체 1~25 질문 벡터
    full_vector = [data.get(f"q{i}", 3) for i in range(1, 26)]

    # 정책 질문만 13~25 (0-indexed 기준으로 12~24)
    policy_vector = full_vector[12:25]
    # 이념 질문 1~12
    ideology_vector = full_vector[0:12]


    similarities = {
        name: cosine_similarity(policy_vector, vector)
        for name, vector in CANDIDATE_VECTORS.items()
    }
    sorted_candidates = sorted(similarities.items(), key=lambda x: x[1], reverse=True)
    best_match = sorted_candidates[0][0]

    return Response({
        "ideologyScore": calculate_ideology_score(ideology_vector),
        "categoryScore": calculate_category_scores(policy_vector),
        "policyMatch": best_match,
        "top3": [
            {"name": name, "score": round(score * 100, 1)}
            for name, score in sorted_candidates[:3]
        ]
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_test_result(request):
    user = request.user
    ideology_score = request.data.get("ideologyScore")
    category_score = request.data.get("categoryScore")
    policy_match = request.data.get("policyMatch")
    top3 = request.data.get("top3")

    if ideology_score is None or not policy_match or policy_match is None or top3 is None:
        return Response({"error": "Invalid data"}, status=400)

    user.ideology_score = ideology_score
    user.category_score = category_score
    user.policy_match = policy_match
    user.top3 = top3
    user.save()

    return Response({"success": True})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_info(request):
    user = request.user
    return Response({
        "nickname": user.nickname,
        "ideologyScore": user.ideology_score,
        "categoryScore": user.category_score,
        "policyMatch": user.policy_match,
        "top3": user.top3,
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