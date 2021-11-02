from django.db import models
from django.conf import settings


class Contribution(models.Model):
    ein = models.CharField(max_length=20, null=True,)
    charity = models.CharField(max_length=255, blank=True)
    in_hours = models.IntegerField(blank=True, default=2)
    in_dollars = models.IntegerField(blank=True, default=20)
    text = models.CharField(max_length=255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, blank=True,)

    def __str__(self):
        return self.text


# class Review(models.Model):
#     api_uid = models.UUIDField()
#     text = models.CharField(max_length=255)
#     user = models.ForeignKey(settings.AUTH_USER_MODEL,
#                              on_delete=models.CASCADE, blank=True,)
