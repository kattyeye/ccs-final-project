from django.db import models
from django.conf import settings


class Charity(models.Model):
    name = models.CharField(max_length=255,)
    ein = models.CharField(max_length=20,)
    url = models.CharField(max_length=255,)

    class Meta:
        verbose_name_plural = "charities"

    def __str__(self):
        return self.name


class Contribution(models.Model):
    ein = models.CharField(max_length=20, null=True,)
    charity = models.ForeignKey(
        Charity, on_delete=models.CASCADE, blank=True, default=None,)
    in_hours = models.IntegerField(blank=True, default=0)
    in_dollars = models.IntegerField(blank=True, default=0)
    text = models.CharField(max_length=255, blank=True,)
    image = models.ImageField(
        upload_to='contrib_images', default='usericon.png', blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, blank=True,)

    def __str__(self):
        return self.text


class Review(models.Model):
    ein = models.CharField(max_length=20, null=True,)
    charity = models.ForeignKey(
        Charity, on_delete=models.CASCADE, blank=True, default=None,)
    review_text = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, blank=True,)
    image = models.ImageField(
        upload_to='review_images', blank=True, default='usericon.png')

    SUBMITTED = 'SUB'
    PUBLISHED = "PUB"

    PHASE_OPTIONS = [
        (SUBMITTED, "Submitted"),
        (PUBLISHED, "Published"),
    ]
    phase = models.CharField(
        default='SUB',
        choices=PHASE_OPTIONS,
        max_length=3
    )
