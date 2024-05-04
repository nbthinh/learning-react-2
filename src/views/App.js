import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListToDo from './Todos/ListTodo';
// import React, { Component } from 'react';
// import { Alert } from 'bootstrap-4-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

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

            <Routes>
              <Route path="/" element={<Home />} exact>
                {/* <Home /> */}
              </Route>
              <Route path="/todos" element={<ListToDo />}>
                {/* <ListToDo /> */}
              </Route>
              <Route path="/about" element={<MyComponent />}>
                {/* <MyComponent /> */}
              </Route>
              
            </Routes>


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
