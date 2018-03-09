import React, { Component } from 'react';
import './nav.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Header from '../header/header';


class Nav extends Component {
  constructor(props){
  	super(props);
  }
  render() {
    return (
      <Router>
        <div className="nav-container">
          <ul>
            <li><Link to='/'>Reviews</Link></li>
            <li><Link to='/'>Tech</Link></li>
            <li><Link to='/'>News</Link></li>
            <li><Link to='/'>Affordable</Link></li>
            <li><Link to='/'>Money Dont Matta</Link></li>
            <li><Link to='/'>Fitness</Link></li>
          </ul>

          <hr />

          <Route path='/' component={Header}/>
        </div>
      </Router> 
    );
  }
}

export default Nav;
