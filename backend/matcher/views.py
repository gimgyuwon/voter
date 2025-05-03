import requests
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings

# Create your views here.
@api_view(['POST'])
def kakao_login(request):
    code = request.data.get('code')
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
    print("🧾 token response status:", token_res.status_code)
    print("🧾 token response body:", token_res.text)
    token_json = token_res.json()
    access_token = token_json.get('access_token')
    if not access_token:
        return Response({'error': 'Failed to get token'}, status=400)
    
    # 토큰으로 사용자 정보 요청
    user_info_url = 'https://kapi.kakao.com/v2/user/me'
    headers = {'Authorization': f'Bearer {access_token}'}
    user_info_res = requests.get(user_info_url, headers=headers)
    user_info = user_info_res.json()

    kakao_id = user_info.get('id')
    nickname = user_info.get("kakao_account", {}).get("profile", {}).get("nickname")

    return Response({
        'kakao_id': kakao_id,
        'nickname': nickname,
        'access_token': access_token

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
    '한동훈': {'q8': 5, 'q10': 4},
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

    # 결과 반환환
    return Response({
        "ideology": ideology,
        "policyMatch": best_candidate
    })