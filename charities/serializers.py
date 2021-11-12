from re import T
from rest_framework import serializers
from rest_framework.fields import JSONField
from .models import Contribution, Review, Charity
import json
from django.core.exceptions import ValidationError


class CharitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Charity
        fields = '__all__'


class ContributionSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")
    charity = CharitySerializer(
        many=False, read_only=True)
    # charity_json = JSONField(write_only=True,)

    # def validate_json(self, value):
    #     if not isinstance(value, list):
    #         ValidationError("charity_json expects a list")

    #     for item in value:
    #         serializer = CharitySerializer(charity=item)
    #         serializer.is_valid(raise_exception=True)
    #     return value
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
        many=False, required=False, read_only=True)

    class Meta:
        model = Review
        fields = '__all__'

    def create(self, validated_data):
        validated_data['charity'] = Charity.objects.get_or_create(
            name=validated_data['charity']['name'], ein=validated_data['charity']['ein'], url=validated_data['charity']['url'])[0]
        review = Review.objects.create(
            **validated_data,)

        return review
