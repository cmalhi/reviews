import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import DisplayContent from './components/display-content/display-content';
import headphones from './images/headphones.jpg';
import battery from './images/battery.jpg';
import sata from './images/sata.jpg';

const Data = [
  { 
    title: 'Headphones',
    summary: 'Check out these amazing triple driver headphones! That\'s right! An amazing 6 speaker listening experience.',
    img: headphones
  },
  {
    title: 'Charger',
    summary: 'This is the 50000mAh battery charger that is going to change the way you precieve life it self!',
    img: battery
  },
  {
    title: 'Macbook 2012 SATA cable',
    summary: 'Are you having trouble with your 2012 Macbook Pro freezing or not loading the OS at all? Check out this quick and permanent fix',
    img: sata
  },
  { 
    title: 'Headphones',
    summary: 'Check out these amazing triple driver headphones! That\'s right! An amazing 6 speaker listening experience.',
    img: headphones
  },
  {
    title: 'Charger',
    summary: 'This is the 50000mAh battery charger that is going to change the way you precieve life it self!',
    img: battery
  },
  {
    title: 'Macbook 2012 SATA cable',
    summary: 'Are you having trouble with your 2012 Macbook Pro freezing or not loading the OS at all? Check out this quick and permanent fix',
    img: sata
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DisplayContent reviews={Data}/>
        <Footer />
      </div>
    );
  }
}

export default App;

