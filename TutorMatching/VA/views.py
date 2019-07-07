from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import json
import ibm_watson
isInit=False
service=ibm_watson.AssistantV2(
    version='2019-02-28',
    username='apikey',
    password='VB1diOBzfNOZPFFdferizwuNM4QSvWxtzemBwCAIZGkC',
    url='https://gateway.watsonplatform.net/assistant/api/'

)
globar_var = ''
gsession_id= ''

# This will return a list of books
@api_view(["GET"])
def createSession(request):
    global isInit
    if (isInit==True):
        return Response(status=status.HTTP_200_OK, data={"data":"Already"})
    isInit=False
    response = service.create_session(
        assistant_id='4b832497-d551-41cb-b8fe-3a3b58e8c02f'
    ).get_result()
    global gsession_id
    gsession_id = response['session_id']
    
    
    return Response(status=status.HTTP_200_OK, data={"data":"Success"})
@api_view(["POST"])
def message(request):
    global isInit
    isInit=True
    incomingMessage=str(request.body)[11:-3]
    print(incomingMessage)
    response = service.message(
    assistant_id='4b832497-d551-41cb-b8fe-3a3b58e8c02f',
    session_id= gsession_id,
    input={
        'message_type': 'text',
        'text': incomingMessage
    }
    ).get_result()
    print("X")
    print(response)
    print("Y")

    filter_subject = ''
    filter_location = ''
    intents = response['output']['intents']
    print("First")
    print(intents)
    print("Second")
    if len(intents):
        intent = intents[0]['intent']
        if intent == 'tutor_subject':
            entities = response['output']['entities']
            for en in entities:
                if en['entity'] == 'subjects':
                    value = en['value']
                if value in ['Math', 'English', 'Physics']:
                    filter_subject = value
        if intent == 'tutor_location':
            entities = response['output']['entities']
            for en in entities:
                if en['entity'] == 'location':
                    value = en['value']
                if value in ['Da Nang', 'Ha Noi', 'Ho Chi Minh']:
                    filter_location = value




    repliedMessage=response['output']['generic']
    if (len(repliedMessage)==0):
        repliedMessage="I don't understand"
    else:
        repliedMessage=repliedMessage    
    return Response(status=status.HTTP_200_OK, data={"data":repliedMessage})


