import requests
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.conf import settings
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated


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
    print("code:", code)
    if not code:
        return Response({'error': 'No code provided'}, status=400)
    
    # 카카오 토큰 요청
    token_url = 'https://kauth.kakao.com/oauth/token'
    token_data = {
        'grant_type': 'authorization_code',
        'client_id': settings.KAKAO_CLIENT_ID,
        'redirect_uri': settings.KAKAO_REDIRECT_URI,
        'code': code,
        'client_secret': settings.KAKAO_SECRET_CODE
    }

    token_res = requests.post(token_url, data=token_data)
    print("token status:", token_res.status_code)
    print("token response:", token_res.text)
    token_json = token_res.json()
    access_token = token_json.get('access_token')
    if not access_token:
        return Response({'error': 'Failed to get token'}, status=400)
    
    # 토큰으로 사용자 정보 요청
    user_info_url = 'https://kapi.kakao.com/v2/user/me'
    headers = {'Authorization': f'Bearer {access_token}'}
    user_info_res = requests.get(user_info_url, headers=headers)
    user_info = user_info_res.json()
    print("user info status:", user_info_res.status_code)
    print("user info:", user_info_res.text)

    kakao_id = user_info.get('id')
    nickname = user_info.get("kakao_account", {}).get("profile", {}).get("nickname")

    # 기존 사용자 확인 or 새로 생성
    user, _ = User.objects.get_or_create(kakao_id=kakao_id, defaults={'nickname': nickname, 'username': f'kakao_{kakao_id}'})
    tokens = get_tokens_for_user(user)

    return Response({
        'access_token': tokens['access'],
        'refresh_token': tokens['refresh'],
        'nickname': user.nickname,
        'ideology': user.ideology,
        'policyMatch': user.policy_match,
    })

@api_view(['POST'])
def calculate_match(request):
    # 사용자가 보낸 데이터(json)
    data = request.data

    # 정치 성향 점수 계산(1~7번 질문 평균)
    progressive_keys = ['q1', 'q3', 'q4']
    conservative_keys = ['q2', 'q5', 'q6', 'q7']

    score = 0
    for k in progressive_keys:
        score += data.get(k, 0)
    for k in conservative_keys:
        score += 6 - data.get(k, 0)

    ideology_score = score / 7

    # 점수에 따라 보수/중도/진보 분류
    if ideology_score >= 4:
        ideology = "진보"
    elif ideology_score >= 2.5:
        ideology = "중도"
    else:
        ideology = "보수"


    # 공약 기반 점수 계산
    candidate_weights = {
    '김문수': {'q8': 5, 'q10': 4},
    '이재명': {'q9': 5, 'q10': 5, 'q13': 3},
    '이준석': {'q11': 4, 'q12': 5},
    '김재연': {'q14': 5, 'q15': 4, 'q13': 2},
    }


    scores = {}
    for name, weights in candidate_weights.items():
        total = 0
        for question_key, weight in weights.items():
            total += data.get(question_key, 0) * weight
        scores[name] = total


    # 점수 높은 순으로 정렬
    sorted_scores = sorted(scores.items(), key=lambda x: x[1], reverse=True)
    best_candidate = sorted_scores[0][0]

    # 결과 반환
    return Response({
        "ideology": ideology,
        "policyMatch": best_candidate
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
    })