import React, {useState} from 'react';

const InputField = (props) =>{
    const [message,setMessage]=useState('');
    const onChangleHandle = (e)=>
    {
        setMessage(e.target.value);
    }
    return(
        <div className="input-filed-component">
            <input 
                id='input-box' 
                type='text'    
                onChange={onChangleHandle} 
                value={message}
                onKeyDown= {(e)=>{if (e.keyCode === 13) document.getElementById('btn').click();}}
            ></input>
            <button id='btn' onClick={()=>{
                props.onClickHandle(message,"me");
                setMessage('');
                }}>Send</button>
        </div>
    )
}

export default InputField;