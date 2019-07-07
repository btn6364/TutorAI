from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import json
import ibm_watson

service=ibm_watson.AssistantV2(
    version='2019-02-28',
    username='apikey',
    # password='VB1diOBzfNOZPFFdferizwuNM4QSvWxtzemBwCAIZGkC',
    password='VB1diOBzfNOZPFFdferizwuNM4QSvWxtzemBwCAIZGkC',
    url='https://gateway.watsonplatform.net/assistant/api/'

)
globar_var = ''
gsession_id= ''

# This will return a list of books
@api_view(["GET"])
def createSession(request):
    response = service.create_session(
        # assistant_id='4b832497-d551-41cb-b8fe-3a3b58e8c02f'
        assistant_id='90e73ccd-45b1-47e7-a878-43ddd6c7f6a5',
    ).get_result()
    global gsession_id
    gsession_id = response['session_id']
    return Response(status=status.HTTP_200_OK, data={"data":"Success"})
@api_view(["POST"])
def message(request):
    incomingMessage=str(request.body)[11:-3]
    print(incomingMessage)
    response = service.message(
    # assistant_id='4b832497-d551-41cb-b8fe-3a3b58e8c02f',
    assistant_id='90e73ccd-45b1-47e7-a878-43ddd6c7f6a5',
    session_id= gsession_id,
    input={
        'message_type': 'text',
        'text': incomingMessage
    }
    ).get_result()
    print("X")
    print(response)
    print("Y")



    repliedMessage=response['output']['generic']
    print(len(repliedMessage))
    if (len(repliedMessage)==0):
        repliedMessage="I don't understand"
    else:
        repliedMessage=repliedMessage    
    return Response(status=status.HTTP_200_OK, data={"data":repliedMessage})


