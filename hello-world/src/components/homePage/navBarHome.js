import React, { Component } from 'react';
import logo from '../../images/logo.png';
import GeneralForm from "../loginComponents/generalForm";
import './navBar.css';


class NavBarHome extends Component {

  constructor(props) {
    super();
  }


  changeWin = () =>
    {
       
    }
  render() {   
    return (

      <div className="navBarHome">

        <div className="topnav">
          <a href="login-signup.html">
            <div className="logo">
              <img src={logo} alt="../images/logo.png" />
            </div>
          </a>
          
          <a href= "../loginComponents/generalForm">Sign Up</a>
          <buttton onClick={this.changeWin}> signup</buttton> 
          <a href="login-signup.html" >Login</a>
        </div>
      </div>

    );
  }
}

export default NavBarHome;
