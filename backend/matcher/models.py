from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    kakao_id = models.CharField(max_length=100, unique=True)
    nickname = models.CharField(max_length=100)

    # 정치 성향 테스트 결과 저장 필드
    ideology = models.CharField(max_length=20, null=True, blank=True)
    policy_match = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.nickname