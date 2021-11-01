from django.db import models
from django.conf import settings


class Contribution(models.Model):
    # api_uid = models.UUIDField()
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
