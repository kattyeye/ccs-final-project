from django.urls import path, include
from . import views

app_name = "api_v1"

urlpatterns = [

    path('', views.ContributionListAPIView.as_view(),
         name="contribution_list"),
    path('<int:pk>/', views.ContributionDetailAPIView.as_view(),
         name="contribution_list"),

]
