import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './navBar.css';


class NavBarHome extends Component {

  constructor(props) {
    super();
  }
  render() {   

  
    function changeWin()
    {
      
    }
    return (

      <div className="navBarHome">

        <div className="topnav">
          <a href="login-signup.html">
            <div className="logo">
              <img src={logo} alt="../images/logo.png" />
            </div>
          </a>

          <a href= "../loginComponents/generalForm">Sign Up</a>
          <buttton onClick={changeWin}> signup</buttton> 
          <a href="login-signup.html" >Login</a>
        </div>
      </div>

    );
  }
}

export default NavBarHome;
