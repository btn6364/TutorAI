import React,{useState, useEffect} from 'react';
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ChatBox from './Components/ChatBox/ChatBox';
import LoginPage from './Components/LoginPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import TutorList from './Components/TutorList/TutorList';
import { withFirebase } from './Components/Firebase';
let ttload=0,bl=0;
const filterTutor = (list,req)=>{
  if (req[2]<req[1]) req[2]=req[1];
  const f1=list.filter(tutor=>{
    return (tutor.price>=req[1] && tutor.price<=req[2]);
  })
  let f2;
  if (req[0]==="All subjects") f2=f1;
  else f2=f1.filter(tutor=>{
    return (tutor.subject.toLowerCase()===req[1].toLowerCase());
  })
  let f3;
  if (req[3]==="All locations") f3=f2;
  else f3=f2.filter(tutor =>{
    return (tutor.location.toLowerCase()===req[3].toLowerCase());
  });
  return f3;
}


const fetchData = (setter1,setter2) =>{
  axios.get("http://127.0.0.1:8000/tutors/").
  then(
    response=>{
      const data=response.data.data;
      const jsondata=JSON.parse(data);
      setter2(false);
      setter1(jsondata.map(data=>data.fields));        
        
    }
  ).catch(err=>{console.log(err);ttload=0;})
}
const MainApp = (props) =>{
  const log=props.toogle;

  return (
    <div className="App">
        <div>
          <Navbar loggedIn={props.auth}
          filterState={props.filterState} filterSet={props.filterSet}
          />
        </div>
        <div className="app-lower-part">
          {(props.isLoading===true)?
          <div> Loading</div>:
          <div className="list-of-tutor"> <TutorList listOfTutors={props.listOfTutor}/> </div>}
          <div> {(props.auth===true)?<ChatBox ready={props.ready}/>:null}</div>
        </div>    
    </div>
  )
}
function AppBase(props) {
  const [auth,log]=useState(false); 
  const [isLoading,toogleLoading]=useState(true);
  const [listOfTutor,setList]=useState([]);
  const [filterState,filterSet]=useState(['All subjects',0,100,'All locations']);
  const [loadBot,setBot]=useState(true);
  useEffect(()=>{
    props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? log(true)
        : log(false);
    });
    axios.get("http://127.0.0.1:8000/VA/init/").
  then(
    response=>{
      console.log(response);
      setBot(true);
    }
  ).catch(err=>{console.log(err);bl=0;});
  })
  console.log(auth);
  if (ttload===0) {ttload=1;fetchData(setList,toogleLoading);}
  if (bl===0) {
    bl=1;
    axios.get("http://127.0.0.1:8000/VA/init/").
  then(
    response=>{
      console.log(response);
      setBot(true);
    }
  ).catch(err=>{console.log(err);bl=0;});
  }
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={
            (routeProps)=>(
              <MainApp auth={auth} toogle={log} listOfTutor={filterTutor(listOfTutor,filterState)} isLoading={isLoading}
              filterState={filterState} filterSet={filterSet} ready={loadBot}
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
const App=withFirebase(AppBase);
export default App;
