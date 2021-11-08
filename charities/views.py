from rest_framework import permissions
from .models import Contribution, Review
from rest_framework import generics
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from .serializers import ContributionSerializer, ReviewSerializer


class ContributionListAPIView(generics.ListCreateAPIView):
    serializer_class = ContributionSerializer
    queryset = Contribution.objects.all()
    # permission_classes = (IsOwnerOrReadOnly, IsAdminUser)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user,)


class ReviewListAPIView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    # queryset = Review.objects.all()
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        # logic for an authenticated user
        if not self.request.user.is_anonymous:
            phase_text = self.request.query_params.get('phase')
            if phase_text is not None:
                return Review.objects.filter(phase=phase_text, user=self.request.user)

        return Review.objects.filter(phase='PUB')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user,)


class ReviewListAdminAPIView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permissions_class = (IsAdminUser, IsOwnerOrReadOnly,)

    queryset = Review.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user,)


class ContributionDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContributionSerializer
    queryset = Contribution.objects.all()
    # permission_classes = (IsOwnerOrReadOnly, IsAdminUser)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    # permission_classes = (IsOwnerOrReadOnly, IsAdminUser)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewDetailAdminAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    permission_classes = (IsOwnerOrReadOnly, IsAdminUser)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
