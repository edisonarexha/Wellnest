import React, { Component, useState } from "react";
import "./add-doctors.css";


class AddDoctors extends Component {
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
            placeholder="Name"
            ></input>
 
          <input
            id="surname-input"
            type="text"
            placeholder="Surname"
          ></input>


          <input
            id="email-input"
            type="text"
            placeholder="Email"
          ></input>

          <input
            id="key-input"
            type="text"
            placeholder="Key"
          ></input>
          <input
            id="dega-input"
            type="text"
            placeholder="Key"
          ></input>
           
          <div id="add-div-1"  type="button">
            Add
          </div>
          </div>
        </div> 
        </div>
    );
  }
}

export default AddDoctors;
