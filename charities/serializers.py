from rest_framework import serializers
from .models import Contribution


class ContributionSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")

    class Meta:
        model = Contribution
        fields = '__all__'
