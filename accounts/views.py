from django.shortcuts import render
from rest_framework import generics
from .models import Profile
from .serializers import AccountsSerializer


class AccountListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = AccountsSerializer
