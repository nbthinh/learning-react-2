import React from "react";
import "./Nav.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/todos">Todos</a>
                <a href="/about">About</a>


                {/* <Link className="active" to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/about">About</Link> */}
            </div>
        )
    }
}

export default Nav;