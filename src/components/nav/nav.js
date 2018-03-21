import React, { Component } from 'react';
import './nav.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Nav = () => (
  <div className="header-container">
    <div className="title">Real Reviews</div>
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
