#!/bin/bash

echo "Setting up..."
cd TutorMatching && pip3 install django-rest-framework && pip install ibm-watson && pip3 install django-cors-headers && python3 manage.py migrate 
cd ..
cd frontend && yarn install 
cd .. 
echo "Completed setup"
