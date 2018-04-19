import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import logo from './food.svg';


class HPage extends Component {
  render() {
    return (
      <div className= "container-fluid">
      	


      	<br></br>
      	<br></br>
      	<br></br>
      	<h1>
      	Smart Water Bottle
      	</h1>

      	<p>
      	The human body is composed of 60% water. It plays an integral part to the mechanisms of the body.<br></br>We believe that through the use of this technology; we can regulate and manage the day to day water consumption, we believe that this product <br></br> will allow you to keep on top of your water intake, and consequently become healthier you.
      	</p>

      	<img src={logo} height = "350px" alt="pic"/> 



      </div>
    );
  }
}

export default HPage;
