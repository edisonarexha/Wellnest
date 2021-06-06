import React, { Component } from "react";
import "./profile.css";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import ProfilePicChanger from "../Profile/profilePicChanger.js";
import pp1 from "../Profile/pics/pp1.jpg";
import pp2 from "../Profile/pics/pp2.jpeg";
import pp3 from "../Profile/pics/pp3.jpg";

class Profile extends Component {
  state = {
    dateOfBirth: "",
    bloodType: "",
    lastDiagnose: "",
    alergies: "",
    vaccination: "",
    profileImage: "",
  };

  setDateOfBirth = (event) => {
    this.setState({ dateOfBirth: event.target.value });
  };

  

  setBloodType = (event) => {
    this.setState({ bloodType: event.target.value });
  };

  setLastDiagnose = (event) => {
    this.setState({ lastDiagnose: event.target.value });
  };
  // setalergies = (event) => {
  //   this.setState({ alergies: event.target.value });
  // };
  // setvaccination = (event) => {
  //   this.setState({ vaccination: event.target.value });
  // };
  addData = () => {
    fetch("http://localhost:5000/api/Profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(this.state),
    }).then(() => {
      //refresh
    });
  };

  handleFileSelected = (event) => {
    event.preventDefault();
    this.setState({ Photo: event.target.files[0].name });
    const formData = new FormData();
    formData.append(
      "myFile",
      event.target.files[0],
      event.target.files[0].name
    );

    fetch("http://localhost:5000/api/Profile/SaveFile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  };
  render() {
    console.log(this.state.bloodType);
    return (
      <div className="profile-pannel">
        <div className="pr-wrapper">
          <div className="profile-pic-changer">
            <Avatar size={400} icon="user" src={this.state.profileImage} />
            <ProfilePicChanger
              handleImageChange={this.handleImageChange}
              pp1={pp1}
              pp2={pp2}
              pp3={pp3}
            />
          </div>
          <div className="profile-container">
            <div className="profile-wrapper">
              <form >
                <div className="profile-input-fields">
                  <div className="field">
                    <input
                      type="date"
                      defaultValue={this.state.dateOfBirth}
                      onChange={this.DateOfBirthhandler}
                      placeholder="Date of birth"
                    />
                  </div>

                  <div className="field">
                    <input
                      type="text"
                      
                      defaultValue={this.state.bloodType}
                      onChange={this.BloodTypehandler}
                      placeholder="Blod Type..."
                    />
                    
                  </div>
                  <div className="field">
                    <input
                      type="date"
                      defaultValue={this.state.lastDiagnose}
                      onChange={this.LastDiagnosehandler}
                      placeholder="Last Diagnose"
                    />

                    </div>
                    <button 
                onClick={() => this.addData()}
                className="button">Submit</button>

                  {/* <div className="field">
                  <input
                    type="text"
                    value={this.state.alergies}
                    onChange={this.alergieshandler}
                    placeholder="Alergies"
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    value={this.state.vaccination}
                    onChange={this.vaccinationhandler}
                    placeholder="Vaccination"
                  />
                </div> */}
                </div>
                {/* <div className="centered">
                <button className="button" type="submit">
                  Submit
                </button>
              </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
