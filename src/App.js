//APP JS ACTS AS THE BRIDGE BETWEEN INDEX AND REACT

import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu'

//components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HPage from './components/pages/homepage';
import Projects from './components/pages/projects';
import Menu1 from './components/menu';
import Pubnub from './components/pubnub';

class App extends Component {
  render() {
    return (

      <Router>

      <div className="App">
       
        <Menu1 />
        <Header />
        <Pubnub />
        

        <Route exact path='/HPage' component={HPage} />
        <Route exact path='/Projects' component={Projects} />





        
      
     </div>
     </Router>
    );
  }
}

export default App;
