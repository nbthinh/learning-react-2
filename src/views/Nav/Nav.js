import React from "react";
import "./Nav.scss";
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                {/* <a className="active" href="/">Home</a>
                <a href="/todos">Todos</a>
                <a href="/about">About</a> */}

                <NavLink to="/" exact={true}>Home</NavLink>
                <NavLink to="/todos" >Todos</NavLink>
                <NavLink to="/about" >About</NavLink>

                {/* <Link to="/" reloadDocument>Home</Link>
                <Link to="/todos" reloadDocument>Todos</Link>
                <Link to="/about" reloadDocument>About</Link> */}
            </div>
        )
    }
}

export default Nav;