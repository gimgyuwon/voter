from django.urls import path
from .views import kakao_login, calculate_match, save_test_result, user_info, toggle_bookmark

urlpatterns = [
    path('auth/kakao', kakao_login),
    path('calculate/', calculate_match),
    path('test-result', save_test_result),
    path('user-info', user_info),
    path('bookmark/toggle', toggle_bookmark)
]
