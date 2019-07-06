import React, {useState} from 'react';
import './ChatBox.css';
import MessageBox from '../MessageBox/MessageBox';
import InputField from '../InputField/InputField';
import axios from 'axios';
let firstMess=0;
const Chatbox = ()=>{
    const [isLoading,setLoading] = useState(false);
    const [listOfMess,setMess]=useState([]);
    const addMessage = (message,classname) =>{
        setMess(prev=>{
            return [...prev,{"class":classname,"text":message}];
        })
    };
    const handleClick = (message,classname) =>{
        if (message==="" && firstMess!==0) return;
        addMessage(message,classname);
        axios.post("http://127.0.0.1:8000/VA/run/",{
            "text":message
        }).
  then(
    response=>{
      console.log(response.data.data);
      response.data.data.forEach(
          mess=>{
              addMessage(mess['text'],'bot');
          }
      )
    }
  ).catch(err=>{console.log(err);})
    }
    if (firstMess===0)
    {
        handleClick("","me");
        firstMess=1;
    }
    return(
        <div className="chat-box" >
            <MessageBox messages={listOfMess}/>
            <InputField onClickHandle={handleClick}/>
        </div>
    )
}
export default Chatbox;