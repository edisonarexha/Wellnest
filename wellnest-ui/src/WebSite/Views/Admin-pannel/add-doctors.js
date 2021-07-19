import React, { Component, useState } from "react";
import "./add-doctors.css";


class AddDoctors extends Component {
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
      //kena me shku nhome
    });
  };

  handleFileSelected = (event) => {
    event.preventDefault();
  };
  render() {
    return (
    <div className="main-div-container">

   
    <div id="add-main-div-1">
        <div id="span-div-1">
          <span>
            <b>Add new Doctor</b>
          </span>
        </div>
        <div className="add-div-2">

          <input
            id="name-input-1"
            type="text"
            value={this.state.name}
            onChange={this.setName}
            placeholder="Name"
            ></input>
 
          <input
            id="surname-input"
            type="text"
            value={this.state.surname}
            onChange={this.setSurname}
            placeholder="Surname"
          ></input>


          <input
            id="email-input"
            type="text"
            value={this.state.email}
            onChange={this.setEmail}
            placeholder="Email"
          ></input>

          <input
            id="key-input"
            type="text"
            value={this.state.userkey}
            onChange={this.setUserkey}
            placeholder="Key"
          ></input>
          {/* <input
            id="dega-input"
            type="text"
            placeholder="Key"
          ></input> */}
           
          <div id="add-div-1" onClick={() => this.addNewUser()} type="button">
            Add
          </div>
          </div>
        </div> 
        </div>
    );
  }
}

export default AddDoctors;
