import React, { Component, useState } from "react";
import "./Registerform.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "",
      Password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  usernamehandler = (event) => {
    this.setState({
      Username: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    this.setState({
      password: "",
      role: "",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="pannel">
          <div className="wrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="input-fields">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.passwordhandler}
                  placeholder="Password..."
                />
                <input
                  type="username"
                  value={this.state.Username}
                  onChange={this.usernamehandler}
                  placeholder="Username..."
                />
              </div>
              <button className="button" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
