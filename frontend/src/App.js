import React,{useState} from 'react';
import axios from "axios";
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
"price":"5"},];
const fetchData = (setter1,setter2) =>{
  axios.get("http://127.0.0.1:8000/tutors/").
  then(
    response=>{
      const data=response.data.data;
      const jsondata=JSON.parse(data);
        setter1(jsondata.map(data=>data.fields));        
        setter2(false);
    }
  ).catch(err=>{console.log(err);})
}
const MainApp = (props) =>{
  const log=props.toogle;

  return (
    <div className="App">
        <div>
          <Navbar loggedIn={props.auth} toogle={log}
          filterState={props.filterState} filterSet={props.filterSet}
          />
        </div>
        <div className="app-lower-part">
          {(props.isLoading===true)?
          <div> Loading</div>:
          <div className="list-of-tutor"> <TutorList listOfTutors={props.listOfTutor}/> </div>}
          <div> <ChatBox/></div>
        </div>    
    </div>
  )
}
function App() {
  const [auth,log]=useState(false); 
  const [isLoading,toogleLoading]=useState(true);
  const [listOfTutor,setList]=useState([]);
  const [filterState,filterSet]=useState(['All subjects','All price range','All locations'])
  console.log(auth);
  fetchData(setList,toogleLoading);
  return (
    
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={
            (routeProps)=>(
              <MainApp auth={auth} toogle={log} listOfTutor={listOfTutor} isLoading={isLoading}
              filterState={filterState} filterSet={filterSet}
              />
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
