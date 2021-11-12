from django.contrib import admin
from .models import Charity, Contribution, Review
# Register your models here.
admin.site.register(Contribution)
admin.site.register(Review)
admin.site.register(Charity)
