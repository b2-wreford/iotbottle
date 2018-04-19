import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import logo from './food.svg';



class Header extends Component {
  render() {
    return (
      <header>

      <h1> IOT Smart Bottle </h1>

           <div className="logo">

           <img src={logo} height = "50px" alt="pic"/>

           </div>

           

      </header> 
      
    );
  }
}

export default Header;
