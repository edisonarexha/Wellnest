import React, { Component } from "react";
import './add-sickness.css';
class AddSickness extends Component {
    state = {
        Name: null,
        information: null,
        PhotoName: null
    }
    setName = (event) => {
        this.setState({ Name: event.target.value });
    }
    setInformation = (event) => {
        this.setState({ information: event.target.value });
    }
    addNewDiseases = () => {
        fetch('http://localhost:5000/api/diseases', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(() => {
            //this.props.refreshList()
        }
        )
    }
    handleFileSelected = (event) => {
        event.preventDefault();
        this.setState({ PhotoName: event.target.files[0].name });
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch('http://localhost:5000/api/diseases/savefile', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
       
        return (
            <div id="add-main-div">
                <div id="span-div">
                    <span><b>Add new Disease!</b></span>
                </div>
                <div id="add-div-l">
                    <label id="name-l">Name</label>
                    <input id="name-input" type="text" placeholder="Name" value={this.state.Name} onChange={this.setName}></input>
                    <labe id="info-l">Information</labe>
                    <textarea id="information-txt" type="text" placeholder="Information" value={this.state.information} onChange={this.setInformation}></textarea>
                    {this.state.PhotoName ? <span><img id="img-span" src={"http://localhost:5000/api/diseases/GetPhoto/" + this.state.PhotoName} height="220px" /> </span> : ""}
                    <div> 
                        <label for="image" id="img-label">{this.state.PhotoName ? 'Change Image' : 'Select Image'}</label>
                        <input class="photo" style={{ visibility: 'hidden' }} type="file" id="image" placeholder="Photo" onChange={this.handleFileSelected}></input>
                    </div>
                    <div id="add-div" onClick={() => this.addNewDiseases()} type="button">Add</div>
                </div>
            </div>
        )
    }

}

export default AddSickness;