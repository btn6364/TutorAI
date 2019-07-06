import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { withFirebase } from '../Firebase';
const onClickHandle = (email,pwd,firebase)=>{
    const E=document.getElementById("email");
    
    if (E) E.value="";
    const P=document.getElementById("pwd");
    
    if (P) P.value="";
    console.log(email);
    console.log(pwd);
    firebase.doCreateUserWithEmailAndPassword(email,pwd).then(() => {
        console.log("suc");
      })
      .catch(error => {
        console.log("err");
      });

}
const SignUpPageComponent  = (props)=>{
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
   
    return (
        <div>
            <label>Email</label>
            <input onChange={(e)=>{setEmail(e.target.value);}} type="text" id="email"></input>
            <label>Password</label>
            <input onChange={(e)=>{setPwd(e.target.value);}} type="password" id="pwd"></input>
            <Link to="/login" onClick={()=>{
                onClickHandle(email,pwd,props.firebase);
            }}>Sign Up</Link>
        </div>
    )
};
const SignUpPage = withFirebase(SignUpPageComponent);
export default SignUpPage;