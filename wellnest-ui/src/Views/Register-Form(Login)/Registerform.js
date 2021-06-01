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
    setName = (event) => {
      this.setState({Name: event.target.value});
    }
  
    setEmail = (event) => {
      this.setState({Email: event.target.value});
    }
    
    setUsername = (event) => {
      this.setState({Username: event.target.value});
    }
    setPassword = (event) => {
      this.setState({Password: event.target.value});
    }
    setRole = (event) => {
      this.setState({Role: event.target.value});
    }
  
    addNewPhone = () => {
      fetch('https://localhost:44321/api/Users',{
          method:'POST',
          headers:{'Accept':'application/json',
          'Content-Type':'application/json;charset=utf-8'},
          body: JSON.stringify(this.state)
      }).then(() => this.props.refreshList())
    }
  
    handleFileSelected = (event) => {
      event.preventDefault();
    }
  }

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
                <div className="field" >
                  <select onChange={this.setRole} defaultValue="Select Role" style={{width: '75%'}}>
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
