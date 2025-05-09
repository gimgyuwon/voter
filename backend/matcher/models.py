# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    kakao_id = models.CharField(max_length=100, unique=True)
    username = models.CharField(max_length=150, unique=True)
    nickname = models.CharField(max_length=100)

    ideology_score = models.FloatField(null=True, blank=True)
    category_score = models.JSONField(null=True, blank=True)
    policy_match = models.CharField(max_length=100, null=True, blank=True)
    top3 = models.JSONField(null=True, blank=True) 
    bookmarks = models.JSONField(default=list, blank=True)

    bookmarks = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.nickname

class Candidate(models.Model):
    name = models.CharField(max_length=100)
    cheer_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name