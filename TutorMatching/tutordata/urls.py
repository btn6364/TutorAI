from django.urls import path
from . import views

urlpatterns = [
   path('', views.tutors, name='tutors'),
]