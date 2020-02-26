
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import '../sass/header.scss';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink className="navLink" to="/" activeClassName="activeLink" exact>Home</NavLink>
                <NavLink className="navLink" to="/about" activeClassName="activeLink">About-Us</NavLink>
                <NavLink className="navLink" to="/contact" activeClassName="activeLink">Contact-Us</NavLink>
            </div>
        );
    }
}
export default Header;
