import React, { Component } from 'react';
import './content.css';
import c4 from '../../images/c4.jpg';
import label from '../../images/label.jpg';


class Content extends Component {
  constructor(props){
  	super(props);
  }
  render() {
    return (
      <div className="content-container">
        <div className="expectations">
          <div className="content-title">C4 Original Preworkout</div>
          <img src={c4} className="content-title-image"/>
          <div className="content-sub-heading">What is Cellucor C4 Original</div>
          <div className="content-text">
            With over 1 billion servings sold, Cellucor's C4 series is one of the best selling preworkout supplements on the market today.
          </div>
          <div className="content-sub-heading">What is a preworkout supplement</div>
          <div className="content-text">
            Body builders use preworkout supplements to get a better pump, increase mental stimulation and help preform extra reps for maximum muscle growth.
          </div>
          <div className="content-sub-heading">Lets talk about ingredients</div>
          <img src={label} className="content-title-image"/>
          <div className="content-text">
            Arganine AKG daily = 1.5g - 3.5g
            Beta Alanine = 2g - 5g
            Creatine = 5g
            Caffeine = 100mg - 400mg depending on your tolerance, take too much and the focus goes away
            Tyrosine
            Velvet Bean Extract
          </div>
          <div className="content-sub-heading">Usage</div>
          <div className="content-text">
            This preworkout supplement is perfect for those days when you haven't gotten enough sleep, but you still want to have an exceptional workout. People who workout early in the morning or later in the day. People who want to get 1-3 more reps out of each workout. People who want to study better. For studying I highly recommend sipping on one serving throughout your study session. I've also used this to do better on tests. Link to study blog possibly? Talk about amino lean and how its perfect to take during class or during work. Not only does it prevent muscle loss, you will be much more focused at work. Combine that with some complex sugars like clementines and you've got some delicious sources of productive nutrition. I really enjoy the feeling I get from the beta-alanine, not too tingly and there is no jitteryness. I got used to the beta alanine after 2 days of use. I recommend taking it on a relatively empty stomach so that you get the maximum effect. 
          </div>
          <div className="content-sub-heading">Wild Fruit Blast</div>
          <div className="content-text">
            This flavor is fantastic. It tastes great, no bitterness, no funky after taste. Mixing with a cold glass of 8-12 oz of water is a very sweet to the point where it tastes sour. If you aren't a fan of sweet drinks, I highly recommend mixing it in with 16 oz of water to dilute the taste. 
          </div>
          <div className="content-sub-heading">Cost</div>
          <div className="content-text">
            This supplement costs about $1.00 per serving, however I will keep this post updated with the best deal possible. I should focus on this deal more and have the information underneath. Get some nice product shots and call it a day. 
          </div>
          <div className="content-sub-heading">Rating</div>
          <div className="content-text">
            Taste = 9/10 Effects = 8.5/10 Mixability = 10/10 
          </div>
        </div>
      </div>
    );
  }
}

export default Content;




// <div className="expectations">
//   What I am looking for in a pair of headphones: (this list should be mapped)
//   <ul>
//     <li>High quality sound</li>
//     <li>Microphone</li>
//     <li>Durability</li>
//     <li>Affordable</li>
//     <li>Multi-driver configuration</li>
//     <li>Gym use - sprinting and lifting</li>
//   </ul> 
//   Make the rounded tiles animate to the side of this component. That way the user can have something else to read or watch a video on.
// </div>