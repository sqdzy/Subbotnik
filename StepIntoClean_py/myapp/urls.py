from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('map/', views.map, name='map'),
    path("auth/", views.auth, name = 'auth'),
    path('get_markers/', views.get_markers, name='get_markers'),
    path('logout/', views.logout_view, name='logout'),
]