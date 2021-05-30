import React, { Component, useState } from "react";
import Registerform from "./Registerform";
import Login from "./Login";

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
      <div>
        <div className="buttons" >
          <div
            
            className="Sign in"
            type="button"
            onClick={() => {
              this.changeView("Login");
            }}
          >
              Sign in
          </div>
          <div
            className="Sign up"
            onClick={() => {
              this.changeView("Registerform");
            }}
          >
            {this.state.view}Test
          </div>
        </div>
        {this.state.view === "Login" ? <Login /> : <Registerform />}
      </div>
    );
  }
}

export default Form;
