import React, { Component } from "react";
import "./edit-phone.css";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

class EditPhone extends Component {
  state = {
    Name: null,
    Email: null,
    Username: null,
    Password: null,
    Role: null,
  };

  componentDidMount() {
    this.setState({
      ...this.props.model,
    });
  }

  setName = (event) => {
    this.setState({ Name: event.target.value });
  };

  setEmail = (event) => {
    this.setState({ Email: event.target.value });
  };

  setUsername = (event) => {
    this.setState({ Username: event.target.value });
  };
  setPassword = (event) => {
    this.setState({ Password: event.target.value });
  };
  setRole = (event) => {
    this.setState({ Role: event.target.value });
  };

  editUserDetails = () => {
    fetch("https://localhost:44321/api/Users", {
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
                  value={this.state.Name}
                  onChange={this.setName}
                  placeholder="FirstName..."
                />
              </div>
              <div className="field">
                <input
                  type="username"
                  value={this.state.Username}
                  onChange={this.setUsername}
                  placeholder="Username..."
                />
              </div>
              <div className="field">
                <input
                  type="email"
                  value={this.state.Email}
                  onChange={this.setEmail}
                  placeholder="Email..."
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  value={this.state.Password}
                  onChange={this.setPassword}
                  placeholder="Password..."
                />
              </div>
              <div className="field">
                <select
                  onChange={this.setRole}
                  defaultValue="Select Role"
                  style={{ width: "75%" }}
                >
                  <option defaultValue>Select Role</option>
                  <option value="male">Pacient</option>
                  <option value="female">Doctor</option>
                </select>
              </div>
            </div>
            <div className="centered">
              <button className="button" type="submit">
                Save
              </button>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    );
  }
}
export default EditPhone;
