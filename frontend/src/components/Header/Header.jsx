import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
const Header = props => {

  return (
    <ul>
      <li> <NavLink className="navLink" activeClassName="is-active" to="/" exact>Home</NavLink> </li>
      {props.user ?
      <div>
         {props.user.name}
         {props.user.email}
        <li> <NavLink className="navLink" activeClassName="is-active" to="/users/">users</NavLink></li>
        <li> <NavLink className="navLink" activeClassName="is-active" to="/logout/">Logout</NavLink></li>
        </div>:
        <div>
          
          <li> <NavLink className="navLink" activeClassName="is-active" to="/users/">users</NavLink></li>
          <li> <NavLink className="navLink" activeClassName="is-active" to="/register/">Register</NavLink></li>
          <li> <NavLink className="navLink" activeClassName="is-active" to="/login/">Login</NavLink></li></div>
      }
    </ul>)
};
const mapStateToProps = (state) => {
  return {
    user:state.userReducer.user
  }
}
export default connect(mapStateToProps)(Header);