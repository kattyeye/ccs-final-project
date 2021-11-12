from rest_framework import permissions
from .models import Charity, Contribution, Review
from rest_framework import generics
from .permissions import IsOwner
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from .serializers import ContributionSerializer, ReviewSerializer


class ContributionListAPIView(generics.ListCreateAPIView):
    serializer_class = ContributionSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        if not self.request.user.is_anonymous:
            return Contribution.objects.filter(user=self.request.user)
        # return Contribution.objects.all()

    def perform_create(self, serializer):
        # find out if the charity exists
        # if it does, save the charity name,
        # if it doesn't create new charity name

        serializer.save(user=self.request.user, )


class ReviewListAPIView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    # queryset = Review.objects.all()
    permission_classes = (IsOwner | IsAdminUser,)

    def get_queryset(self):
        # logic for an authenticated user
        if not self.request.user.is_anonymous:
            return Review.objects.filter(user=self.request.user)

        return Review.objects.filter(phase='PUB')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user,)


class PublicReviewListAPIView(generics.ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Review.objects.filter(phase='PUB',)

    # def get_queryset(self):
    #     # logic for an authenticated user
    #     if self.request.user.is_superuser:
    #         return Review.objects.all()

    #     # if self.request.user.is_anonymous:
    #     #     return Review.objects.filter(phase='PUB',)

    #     return Review.objects.filter(phase='PUB',)

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user,)


class ContributionDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContributionSerializer
    queryset = Contribution.objects.all()
    permission_classes = (IsOwner, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    permission_classes = (IsOwner, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewDetailAdminAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    permission_classes = (IsAdminUser,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
