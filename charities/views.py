from .models import Contribution
from rest_framework import generics
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from .serializers import ContributionSerializer


class ContributionListAPIView(generics.ListCreateAPIView):
    serializer_class = ContributionSerializer
    queryset = Contribution.objects.all()
    # permission_classes = (IsOwnerOrReadOnly, IsAdminUser)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user,)


class ContributionDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContributionSerializer
    queryset = Contribution.objects.all()
    # permission_classes = (IsOwnerOrReadOnly, IsAdminUser)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
