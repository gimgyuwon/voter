from django.urls import path
from .views import kakao_login, calculate_match

urlpatterns = [
    path('auth/kakao', kakao_login),
    path('calculate/', calculate_match),
]
