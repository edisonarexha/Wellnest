import React, { Component } from "react";
import "./edit-users.css";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

class EditUser extends Component {
  state = {
    Id: null,
    name: null,
    surname: null,
    email: null,
    userkey: null,
  };

  componentDidMount() {
    this.setState({
      ...this.props.model,
    });
  }

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


  editUserDetails = (Id) => {
    fetch('http://localhost:5000/API/User/'+Id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(this.state),
    }).then(() => this.props.refreshList());
  };

  render() {
    return (
      <Dialog className="dialog-wrapper" open={!!this.props.model}>
        <div class="dialog">
          <DialogTitle>
            <div className="title">
              <div>Edit product</div>
              <i
                class="fa fa-times"
                aria-hidden="true"
                onClick={this.props.closeEditView}
              ></i>
            </div>
          </DialogTitle>
          <DialogContent class="container">
            <div className="edit-input-fields">
          
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
              
            </div>
            <div className="button" onClick={() => this.editUserDetails(this.props.model.Id)} type="button">
            Save</div>
          </DialogContent>
        </div>
      </Dialog>
    );
  }
}
export default EditUser;