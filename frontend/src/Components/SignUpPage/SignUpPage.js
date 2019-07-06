import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
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
    <div className="container">
        <h1>Please sign up here!</h1>
        <Form className="jumbotron">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=>{setEmail(e.target.value);}} type="email" placeholder="Enter email" id="email"/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>{setPwd(e.target.value);}} type="password" placeholder="Password" id="pwd"/>
            </Form.Group>

            <Link to="/login" style={{color:'white'}} onClick={()=>{
                    onClickHandle(email,pwd,props.firebase);
                    }}><Button variant="success">Sign Up</Button></Link>
        </Form>
    </div>

    )
};
const SignUpPage = withFirebase(SignUpPageComponent);
export default SignUpPage;