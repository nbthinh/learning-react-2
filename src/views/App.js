import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListToDo from './Todos/ListTodo';
// import React, { Component } from 'react';
// import { Alert } from 'bootstrap-4-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter,
  Switch,
  // Routes,
  Route} from "react-router-dom";
import ListUser from './Users/ListUser';

const App = () => {
  return (
    <BrowserRouter>

      <div className="App">
        <header className="App-header">

            <Nav />
            <img src={logo} className="App-logo" alt="logo" />
            {/* <MyComponent /> */}
            {/* <Home /> */}
            {/* <ListToDo /> */}

            {/* <Switch> */}
              <Route path="/"  exact>
                <Home />
              </Route>
              <Route path="/todos" >
                <ListToDo />
              </Route>
              <Route path="/about" >
                <MyComponent />
              </Route>
              <Route path="/user" exact>
                <ListUser />
              </Route>
              <Route path="/user/:id">
                <DetailUser />
              </Route>
              
            {/* </Switch> */}


        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
      </div>
    </BrowserRouter>

  );
}

export default App;
