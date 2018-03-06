import React, { Component } from 'react';
import './display-content.css';

class DisplayContent extends Component {
  constructor(props){
  	super(props);
  }
  render() {
  	const list = this.props.reviews.map((review, i) => {
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
