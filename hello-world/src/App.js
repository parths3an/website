import React, { Component } from 'react';
import  NavBarHome from './components/homePage/navBarHome';
import  FooterHome from './components/homePage/footerHome';
import  SlideShow from './components/homePage/slideShow';
import { BrowserRouter as Router} from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    
    return (

      <div className="App">
    <Router>
    <NavBarHome />
      </Router> 
      <SlideShow />
      <FooterHome />
  
      </div>
    );
  }
}

export default App;
