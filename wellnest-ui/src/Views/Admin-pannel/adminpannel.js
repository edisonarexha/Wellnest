import React, { Component, useState } from "react";
import "./adminpannel.css";

class Admin extends Component {
  state = {
    Registerform: [],
    showAddUser: false,
  };

  componentDidMount() {
    this.getUsers();
  }
  getUsers(imageName) {
    this.state.showAddUser = false;

    fetch("https://localhost:44321/api/Users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ phones: data });
      });
  }
  render() {
    return (
      <div>
        <div className="admin-header">
          <span>Dashboard</span>
          <div className="right-header-buttons">
            <div className="back-button">
              <span>Back to Home </span>
            </div>
            <div className="logout-button">
              <span>Logout</span>
            </div>
          </div>
        </div>
        <div className="admin-wrapper">
          <div className="dashboard-container">
            <div className="left-list">
              <div className="action-btn">Users</div>
              <div className="action-btn">Users-messages</div>
            </div>
          </div>

          <div className="header-list">
            <span>Name</span>
            <span>Email</span>
            <span>Username</span>
            <span>Password</span>
            <span>Role</span>
            <span className="btn-content">Edit</span>
            <span className="btn-content">Remove</span>
          </div>
          {this.state.Registerform.map((elem, index) => {
            return (
              <div className="body-list" key={index}>
                <span>{elem.Name}</span>
                <span>{elem.Email}</span>
                <span>{elem.Username}</span>
                <span>{elem.Password}</span>
                <span>{elem.Role}</span>
                <span
                  className="fas fa-pencil-alt btn-content edit-icon"
                  onClick={() => this.setEditValue(elem)}
                ></span>
                <span
                  className="far fa-trash-alt btn-content danger-icon"
                  onClick={() => this.setDeleteValue(elem)}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Admin;
