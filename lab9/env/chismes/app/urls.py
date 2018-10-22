from django.urls import path
from . import views

urlpatterns = [
  path('api/app/', views.CrearChisme.as_view()),

]