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

    class Meta:
        model = Contribution
        fields = '__all__'

    def create(self, validated_data):
        charity_details = json.loads(
            self.context.get('request').data['charity'])
        validated_data['charity'] = Charity.objects.get_or_create(
            name=charity_details['name'], ein=charity_details['ein'], url=charity_details['url'])[0]
        contribution = Contribution.objects.create(
            **validated_data,)

        return contribution

    def update(self, instance, validated_data):
        charity_details = json.loads(
            self.context.get('request').data['charity'])

        instance.charity = Charity.objects.get_or_create(
            name=charity_details['name'], ein=charity_details['ein'], url=charity_details['url'])[0]

        for (key, value) in validated_data.items():
            setattr(instance, key, value)

        instance.save()

        return instance


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")
    charity = CharitySerializer(
        many=False, read_only=True)

    class Meta:
        model = Review
        fields = '__all__'

    def create(self, validated_data):
        print(validated_data)

        charity_details = json.loads(
            self.context.get('request').data['charity'])
        validated_data['charity'] = Charity.objects.get_or_create(
            name=charity_details['name'], ein=charity_details['ein'], url=charity_details['url'])[0]
        review = Review.objects.create(
            **validated_data,)

        return review

    def update(self, instance, validated_data):
        charity_details = json.loads(
            self.context.get('request').data['charity'])

        instance.charity = Charity.objects.get_or_create(
            name=charity_details['name'], ein=charity_details['ein'], url=charity_details['url'])[0]
        for (key, value) in validated_data.items():
            setattr(instance, key, value)

        instance.save()

        return instance
