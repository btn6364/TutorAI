import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
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
    <div className="container">
        <h1>Login Page!</h1>
        <Form className="jumbotron">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=>{setEmail(e.target.value);}} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>{setPwd(e.target.value);}} type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/" style={{color:'white'}} onClick={()=>{
                onClickHandle(email,pwd,props.firebase,props.toogle);
            }}><Button variant="primary" >Login</Button></Link>
        </Form>
    </div>
    )
};
const LoginPage=withFirebase(LoginPageBase);
export default LoginPage;