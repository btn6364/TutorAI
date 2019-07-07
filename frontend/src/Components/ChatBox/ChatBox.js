import React, {useState} from 'react';
import './ChatBox.css';
import MessageBox from '../MessageBox/MessageBox';
import InputField from '../InputField/InputField';
import axios from 'axios';
let firstMess=0;
const Chatbox = (props)=>{
    const [isLoading,setLoading] = useState(false);
    const [listOfMess,setMess]=useState([]);
    const addMessage = (message,classname) =>{
        setMess(prev=>{
            return [...prev,{"class":classname,"text":message}];
        })
    };
    const handleClick = (message,classname) =>{
        if (props.ready===false) return;
        if (message==="" && firstMess!==0) return;
        firstMess=1;
        addMessage(message,classname);
        axios.post("http://127.0.0.1:8000/VA/run/",{
            "text":message
        }).
  then(
    response=>{
      console.log(response.data.data);
      if (response.data.data==="I don't understand") addMessage(response.data.data,'bot');
      else
      response.data.data.forEach(
          mess=>{
              addMessage(mess['text'],'bot');
          }
      )
    }
  ).catch(err=>{console.log(err);
    firstMess = 0;
    axios.get("http://127.0.0.1:8000/VA/init/").
  then(
    response=>{

      console.log(response);
      
    }
  ).catch(err=>{console.log(err);});

})
    }
    if (firstMess===0)
    {
        handleClick("","me");
    }
    return(
        <div className="chat-box" >
            <MessageBox messages={listOfMess}/>
            <InputField onClickHandle={handleClick}/>
        </div>
    )
}
export default Chatbox;