import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Main from './components/main/main';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

