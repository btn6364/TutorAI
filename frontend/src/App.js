import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ChatBox from './Components/ChatBox/ChatBox';

function App() {
  return (
    <div className="App">
        <div>
          <Navbar loggedIn={false}/>
        </div>
        <div className="app-lower-part">
          <div> A</div>
          <div> <ChatBox/></div>
        </div>
    </div>
  );
}

export default App;
