import React from 'react';
import "./MessageBox.css";

const DisplayMessages = (messages)=>
{
    return messages.map(
        (message) =>        
            (
                <div className={`${message.class}` }>
                    {message.text}
                </div>
            )
    )
}
const NothingToDisplay = () =>{
    return (
        <React.Fragment>
            <p> Start by entering a message</p>
        </React.Fragment>
    )
}
const MessageBox = (props) =>
{
    let objChatBox=document.getElementById('chat-box');
    if (objChatBox!==null)
    {
        objChatBox.scrollTop=10000000;
    }
    return(
        <div id='chat-box' className={'chat-box-component'}>
            {(props.messages.length===0)?NothingToDisplay():DisplayMessages(props.messages)}
        </div>
    );
}

export default MessageBox;
