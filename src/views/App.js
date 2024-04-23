import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

// import React, { Component } from 'react';
// import { Alert } from 'bootstrap-4-react';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
