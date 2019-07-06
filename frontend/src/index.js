import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Components/Firebase/';
import axios from 'axios';
axios.get("http://127.0.0.1:8000/VA/init/").
  then(
    response=>{
      console.log(response);
    }
  ).catch(err=>{console.log(err);});
ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}>
    <App />
</FirebaseContext.Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
