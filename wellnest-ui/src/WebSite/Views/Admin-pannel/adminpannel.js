import React, { Component, useState } from "react";
import "./adminpannel.css";
import EditUser from "./edit-users";
import DeleteUser from "./delete-users";
import AddSickness from './AddSickness';
import { Link } from 'react-router-dom';
import AddDoctors from './add-doctors';
class Admin extends Component {
  state = {
    Registerform: [],
    showAddUser: false,
    User: [],
    showEditUser: false,
    showDeleteModal: false,
  };

  componentDidMount() {
    this.getUsers();
  }
  setEditValue(value) {
    this.setState({ showEditUser: value });
  }
  setDeleteValue(value) {
    this.setState({ showDeleteModal: value });
  }

  getUsers() {
    this.state.showAddUser = false;
    this.state.showEditUser = false;
    this.state.showDeleteModal = false;

    fetch("http://localhost:5000/API/User")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ User: data });
        console.log(this.state.User);
      });
  }


  render() {
    return (
      <div>
        <div className="admin-header">
          <span className="dash-name">Dashboard</span>
          <div className="right-header-buttons">
            <div className="back-button">
              <Link to='/'>
                <span id="span1">Back to Home </span>
              </Link>

            </div>
            <div className="logout-button">
              <span>Logout</span>
            </div>
          </div>
        </div>
        <div className="admin-wrapper">
          <div className="dashboard-container">
            <div className="left-list">
            

              <div className="action-btn"><i class="fa fa-user" aria-hidden="true"></i>
              Users</div>
              <div className="action-btn"><i class="fas fa-envelope"></i>
                Users-messages</div>
              <Link to="/add_s">
                <div className="action-btn"><i class="fas fa-disease"></i>
                  Add Sickness</div>
              </Link>
              <Link to="/add-d">
                <div className="action-btn"><i class="fas fa-user-nurse"></i>
                  Add Doctors</div>
              </Link>
            </div>
          </div>
          <div>
            <div className="header-list">
              <span >ID</span>
              <span>Name</span>
              <span>Surname</span>
              <span>Email</span>
             <span>Userkey</span>
              
              <span className="btn-content">Edit</span>
              <span className="btn-content">Remove</span>
            </div>
            {this.state.User.map((elem, index) => {
              return (
                <div className="body-list" key={index}>
                  <span>{elem.Id}</span>
                  <span>{elem.name}</span>
                  <span>{elem.email}</span>
                  <span>{elem.surname}</span>
                  <span>{elem.userkey}</span>
                  
                  
                  <span
                    className="fas fa-pencil-alt btn-content edit-icon"
                    onClick={() => this.setEditValue(elem)}
                  >
                  </span>
                  <span
                    className="far fa-trash-alt btn-content danger-icon"
                    onClick={() => this.setDeleteValue(elem)}
                  >
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {this.state.showEditUser ? (
          <EditUser
            model={this.state.showEditUser}
            closeEditView={() => this.setEditValue(false)}
            refreshList={() => this.getUsers()}
          />
        ) : (
          ""
        )}
        {this.state.showDeleteModal ? (
          <DeleteUser
            model={this.state.showDeleteModal}
            closeDeleteView={() => this.setDeleteValue(false)}
            refreshList={() => this.getUsers()}
          />
        ) : (
          ""
        )}

      </div>
    );
  }
}

export default Admin;