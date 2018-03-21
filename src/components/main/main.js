import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Content from '../content/content';
import DisplayContent from '../display-content/display-content';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Content}></Route>
    <Route path='/about' component={Content}></Route>
    <Route path='/contact' component={DisplayContent}></Route>
  </Switch>
);

export default Main;