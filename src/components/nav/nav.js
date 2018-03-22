import React, { Component } from 'react';
import './nav.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Nav = () => (
  <div className="nav-container">
    <div className="nav-title">Fitrous</div>
    <nav>
      <ul className="nav-list">
        <li className="nav-li"><NavLink to='/'>Home</NavLink></li>
        <li className="nav-li"><NavLink to='/about'>About</NavLink></li>
        <li className="nav-li"><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
