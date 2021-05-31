import React, { Component, useState } from "react";
import "./Registerform.css";

class Registerform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Email: "",
      Username: "",
      Password: "",
      Role: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };
  usernamehandler = (event) => {
    this.setState({
      Username: event.target.value,
    });
  };
  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  rolehandler = (event) => {
    this.setState({
      role: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.Name} ${this.state.Surname}  Registered Successfully !!!!`
    );
    console.log(this.state);
    this.setState({
      Name: "",
      Username: "",
      Email: "",
      Password: "",
      Role: "",
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
                <div className="field">
                  <input
                    type="text"
                    value={this.state.Name}
                    onChange={this.firsthandler}
                    placeholder="FirstName..."
                  />
                </div>
                <div className="field">
                  <input
                    type="username"
                    value={this.state.Username}
                    onChange={this.usernamehandler}
                    placeholder="Username..."
                  />
                </div>
                <div className="field">
                  <input
                    type="email"
                    value={this.state.Email}
                    onChange={this.emailhandler}
                    placeholder="Email..."
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    value={this.state.Password}
                    onChange={this.passwordhandler}
                    placeholder="Password..."
                  />
                </div>
                <div className="field" >
                  <select onChange={this.genderhandler} defaultValue="Select Role" style={{width: '75%'}}>
                    <option defaultValue>Select Role</option>
                    <option value="male">Pacient</option>
                    <option value="female">Doctor</option>
                  </select>
                </div>
              </div>
              <div className="centered">
                <button className="button" type="submit" >Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Registerform;
