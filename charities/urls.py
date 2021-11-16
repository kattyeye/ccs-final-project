from django.urls import path, include
from . import views

app_name = "api_v1"

urlpatterns = [
    path('reviews/<int:pk>/', views.ReviewDetailAPIView.as_view(),
         name="review_deet_list"),
    path('reviews/', views.ReviewListAPIView.as_view(),
         name="review_list"),
    path('public/reviews/', views.PublicReviewListAPIView.as_view(),
         name="review_list_public"),
    path('admin/reviews/<int:pk>/', views.ReviewDetailAdminAPIView.as_view(),
         name="detail_admin"),
    path('admin/reviews/', views.ReviewAdminAPIView.as_view(),
         name="detail_admin"),
    path('<int:pk>/', views.ContributionDetailAPIView.as_view(),
         name="contribution_deet_list"),
    path('', views.ContributionListAPIView.as_view(),
         name="contribution_list"),



]
