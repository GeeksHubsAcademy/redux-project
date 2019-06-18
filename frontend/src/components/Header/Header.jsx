import React from 'react';
import {NavLink} from 'react-router-dom'
const Header =props=>(
    <ul>
    <li> <NavLink className="navLink" activeClassName="is-active" to="/" exact>Home</NavLink> </li>
    <li> <NavLink className="navLink" activeClassName="is-active" to="/about/">About</NavLink></li>
    <li> <NavLink className="navLink" activeClassName="is-active" to="/users/">Users</NavLink></li>
    <li> <NavLink className="navLink" activeClassName="is-active" to="/register/">Register</NavLink></li>
    <li> <NavLink className="navLink" activeClassName="is-active" to="/login/">Login</NavLink></li>
  </ul>
        );
export default Header;