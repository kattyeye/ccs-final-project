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
        many=False,)

    class Meta:
        model = Contribution
        fields = '__all__'

    def create(self, validated_data):
        import pdb
        pdb.set_trace()
        validated_data['charity'] = Charity.objects.get_or_create(
            name=validated_data['charity']['name'], ein=validated_data['charity']['ein'], url=validated_data['charity']['url'])[0]
        contribution = Contribution.objects.create(
            **validated_data,)

        return contribution


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")
    charity = CharitySerializer(
        many=False, read_only=True)

    class Meta:
        model = Review
        fields = '__all__'

    def create(self, validated_data):
        charity_details = json.loads(
            self.context.get('request').data['charity'])
        validated_data['charity'] = Charity.objects.get_or_create(
            name=charity_details['name'], ein=charity_details['ein'], url=charity_details['url'])[0]
        review = Review.objects.create(
            **validated_data,)

        return review
