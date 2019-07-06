import React,{useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ChatBox from './Components/ChatBox/ChatBox';
import LoginPage from './Components/LoginPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import TutorList from './Components/TutorList/TutorList';
const listOfTutor=[{"first_name":"Khanh",
"last_name":"Le",
"email":"a@gmail.com",
"subject":"Math",
"location":"Danang",
"price":"5"},{"first_name":"Khanh",
"last_name":"Le",
"email":"a@gmail.com",
"subject":"Math",
"location":"Danang",
"price":"5"},{"first_name":"Khanh",
"last_name":"Le",
"email":"a@gmail.com",
"subject":"Math",
"location":"Danang",
"price":"5"},{"first_name":"Khanh",
"last_name":"Le",
"email":"a@gmail.com",
"subject":"Math",
"location":"Danang",
"price":"5"},]
const MainApp = (props) =>{
  const log=props.toogle;

  return (
    <div className="App">
        <div>
          <Navbar loggedIn={props.auth} toogle={log}/>
        </div>
        <div className="app-lower-part">
          <div className="list-of-tutor"> <TutorList listOfTutors={listOfTutor}/> </div>
          <div> <ChatBox/></div>
        </div>    
    </div>
  )
}
function App() {
  const [auth,log]=useState(false); 
  console.log(auth);
  return (
    
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={
            (routeProps)=>(
              <MainApp auth={auth} toogle={log}/>
            )
          }
          />
          <Route exact path="/login" render={
            (routeProps)=>(
              <LoginPage toogle={log}/>
            )
          } />
          <Route exact path="/signup" component={SignUpPage}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
