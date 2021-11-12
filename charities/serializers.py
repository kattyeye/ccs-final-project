from rest_framework import serializers
from .models import Contribution, Review, Charity
import json


class CharitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Charity
        fields = '__all__'


class ContributionSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")
    charity = CharitySerializer(
        many=False, )

    class Meta:
        model = Contribution
        fields = '__all__'

    def create(self, validated_data):
        validated_data['charity'] = Charity.objects.get_or_create(
            name=validated_data['charity']['name'], ein=validated_data['charity']['ein'], url=validated_data['charity']['url'])[0]
        contribution = Contribution.objects.create(
            **validated_data,)

        return contribution


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")
    charity = CharitySerializer(
        many=False, required=False)

    class Meta:
        model = Review
        fields = '__all__'

    def create(self, validated_data):
        validated_data['charity'] = Charity.objects.get_or_create(
            name=validated_data['charity']['name'], ein=validated_data['charity']['ein'], url=validated_data['charity']['url'])[0]
        review = Review.objects.create(
            **validated_data,)

        return review
