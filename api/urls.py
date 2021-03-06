from django.urls import path, include


app_name = 'api_v1'
urlpatterns = [

    path('account/', include('accounts.urls', namespace="account")),
    path('contributions/', include('charities.urls', namespace="contributions")),
    path('', include('charities.urls', namespace="reviews")),
]
