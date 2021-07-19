import React, { Component, useState } from "react";
import "./Registerform.css";

class Registerform extends Component {
  state = {
    name: null,
    surname: null,
    email: null,
    userkey: null,
  };
  setName = (event) => {
    this.setState({ name: event.target.value });
  };

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setSurname = (event) => {
    this.setState({ surname: event.target.value });
  };
  setUserkey = (event) => {
    this.setState({ userkey: event.target.value });
  };


  addNewUser = () => {
    console.log("test");
    fetch('http://localhost:5000/API/User', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(this.state),
    }).then(() => {
      //regjistrohet ndb
    });
  };

  handleFileSelected = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="pannel">
          <div className="wrapper">
            <form>
              <div className="input-fields">
              <div className="field">
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.setName}
                  placeholder="FirstName..."
                />
              </div>
              <div className="field">
                <input
                  type="surname"
                  value={this.state.surname}
                  onChange={this.setSurname}
                  placeholder="surname..."
                />
              </div>
              <div className="field">
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.setEmail}
                  placeholder="Email..."
                />
              </div>
              <div className="field">
                <input
                  type="Userkey"
                  value={this.state.userkey}
                  onChange={this.setUserkey}
                  placeholder="userkey..."
                />
              </div>
              
              </div><div className="button" onClick={() => this.addNewUser()} type="button">
            Save</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Registerform;
