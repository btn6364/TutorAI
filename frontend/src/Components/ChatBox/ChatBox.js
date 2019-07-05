import React, {useState} from 'react';
import './ChatBox.css';
import MessageBox from '../MessageBox/MessageBox';
import InputField from '../InputField/InputField';

const Chatbox = ()=>{
    const [isLoading,setLoading] = useState(false);
    const [listOfMess,setMess]=useState([]);
    const addMessage = (message,classname) =>{
        setMess(prev=>{
            return [...prev,{"class":classname,"text":message}];
        })
    };
    const handleClick = (message,classname) =>{
        addMessage(message,classname);
    }
    return(
        <>
            <MessageBox messages={listOfMess}/>
            <InputField onClickHandle={handleClick}/>
        </>
    )
}
export default Chatbox;