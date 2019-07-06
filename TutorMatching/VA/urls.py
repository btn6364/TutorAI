from django.urls import path
from . import views

urlpatterns = [
   path('init/', views.createSession,name='create_session' ),
   path('run/',views.message,name='message')
]