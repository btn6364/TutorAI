import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { withFirebase } from '../Firebase';
const onClickHandle = (email,pwd,firebase,tg)=>{
    const E=document.getElementById("email");
    
    if (E) E.value="";
    const P=document.getElementById("pwd");
    
    if (P) P.value="";
    console.log(email);
    console.log(pwd);
    firebase.doSignInWithEmailAndPassword(email,pwd).then(() => {
        tg(prev=>{return true;});
        console.log("suc");
      })
      .catch(error => {
        console.log(error);
      });

}
const LoginPageBase  = (props)=>{
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
   
    return (
        <div>
            <label>Email</label>
            <input onChange={(e)=>{setEmail(e.target.value);}} type="text" id="email"></input>
            <label>Password</label>
            <input onChange={(e)=>{setPwd(e.target.value);}} type="password" id="pwd"></input>
            <Link to="/" onClick={()=>{
                onClickHandle(email,pwd,props.firebase,props.toogle);
            }}>Log in</Link>
        </div>
    )
};
const LoginPage=withFirebase(LoginPageBase);
export default LoginPage;