import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/api/test")
      .then((Response) => {
      return Response.json();
     })
      .then(function(data){
        setMessage(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul>
          {message.map((text,index) => <li key={'${index}-${text}'}>{text}</li>)}
        </ul>

      </header>
    </div>
  );
}

export default App;
