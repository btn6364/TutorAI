from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Tutor
from django.core import serializers
@api_view(["GET"])
def tutors(request):
    tutors = serializers.serialize("json", Tutor.objects.all())
    return Response(status=status.HTTP_200_OK, data={"data": tutors})

