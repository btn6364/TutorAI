#!/bin/bash

echo "Setting up..."
cd TutorMatching && pip install django-rest-framework && pip install ibm-watson && pip install django-cors-headers && python manage.py migrate && python 
cd ..
cd frontend && npm install
cd .. 
echo "Completed setup"
