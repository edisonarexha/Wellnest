import React, { Component, useState } from "react";
import Registerform from "./Registerform";
import Login from "./Login";
import './Form.css'

class Form extends Component {
  state = {
    view: "Login",
  };
  changeView(newView) {
    this.setState({
      view: newView,
    });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="top-sign-buttons" >
          <div
            
            className="sign-in"
            type="button"
            onClick={() => {
              this.changeView("Login");
            }}
          >
              Sign in
          </div>
          <div
            className="sign-up"
            onClick={() => {
              this.changeView("Registerform");
            }}
          >
            Sign up
          </div>
        </div>
        {this.state.view === "Login" ? <Login /> : <Registerform />}
      </div>
    );
  }
}

export default Form;
