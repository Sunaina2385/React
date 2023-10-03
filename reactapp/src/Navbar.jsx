import React from 'react'
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

/* React is Single Page Application */
const Navbar = () => {
  return (
    <>
        <NavLink activeClassName="active_class" to="/">Home</NavLink>
        <NavLink activeClassName="active_class" to="/about">About</NavLink>
        <NavLink activeClassName="active_class" to="/contact">Contact</NavLink>
        <NavLink activeClassName="active_class" to="/user/fname/lname">User</NavLink>
        <NavLink activeClassName="active_class" to="/search">Search</NavLink>

        {/*

        <br/>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <br/>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>

      */}
        
    </>
  )
}

export default Navbar;
