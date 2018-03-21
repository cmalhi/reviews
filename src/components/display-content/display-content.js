import React, { Component } from 'react';
import './display-content.css';
import headphones from '../../images/headphones.jpg';
import battery from '../../images/battery.jpg';
import sata from '../../images/sata.jpg';

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
];

class DisplayContent extends Component {
  constructor(props){
  	super(props);
    this.state = {
      reviews: Data
    }
  }
  render() {
  	const list = this.state.reviews.map((review, i) => {
      return (
      	<div className="review-tile">
      	  <img src={review.img} className="review-image"/>
          <div className="review-text">
      	    <div className="review-title">{review.title}</div>
      	    <div className="review-summary">{review.summary}</div>
          </div>
        </div>
      );
  	});
    return (
      <div className="display-content-container">
        {list}
      </div>
    );
  }
}

export default DisplayContent;
