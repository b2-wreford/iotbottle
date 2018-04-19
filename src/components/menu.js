import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

class Menu1 extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    return (

      <div className="sideMenu">
      <Menu>
      <ul>
      <li>
      <Link to="/HPage">Home</Link>
      </li>
      <li>
      <Link to="/projects">Projects</Link>
      </li>
      <li>
      <Link to="/pubnub">Tracker</Link>
      </li>

      </ul>
              
      </Menu>

      </div>
    );
  }
}

export default Menu1;