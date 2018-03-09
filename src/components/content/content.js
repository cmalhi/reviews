import React, { Component } from 'react';
import './content.css';

class Content extends Component {
  constructor(props){
  	super(props);
  }
  render() {
    return (
      <div className="content-container">
        <div className="expectations">
          What I am looking for in a pair of headphones:
          <ul>
            <li>High quality sound</li>
            <li>Microphone</li>
            <li>Durability</li>
            <li>Affordable</li>
            <li>Multi-driver configuration</li>
            <li>Gym use - sprinting and lifting</li>
          </ul> 
          Make the rounded tiles animate to the side of this component. That way the user can have something else to read or watch a video on.
        </div>
      </div>
    );
  }
}

export default Content;
