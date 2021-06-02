import React, { Component } from "react";
import './edit-sickness.css'


class EditSickness extends Component {
    state = {
        DiseasesID: null,
        Name: null,
        information: null,
        PhotoName: null,
        
    }

    componentDidMount() {
        this.setState({
            ...this.props.model
        })
    }

    setName = (event) => {
        this.setState({ Name: event.target.value });
    }

    setInformation = (event) => {
        this.setState({ information: event.target.value });
    }

    editSickness = () => {
        fetch('http://localhost:5000/api/diseases', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(() => this.props.refreshList())
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
                console.log(result)
            },
                (error) => {
                    alert('Failed');
                })
    }

    render() {
        return (

            <div class="dialog">

                <div className="title">
                    <div>Edit product</div>
                </div>

                <label>Name</label>
                <input class="name" type="text" placeholder="Name" value={this.state.Name} onChange={this.setName}></input>
                <label>Information</label>
                <textarea class="information" type="text" placeholder="information" value={this.state.information} onChange={this.setInformation}></textarea>
                {this.state.PhotoName ? <span><img src={"http://localhost:5000/api/diseases/GetPhoto/" + this.state.PhotoName} height="220px" /> </span> : ""}
                <div className="image-btn">
                    <label for="image" className="label-button">{this.state.Photo ? 'Change Image' : 'Select Image'}</label>
                    <input class="photo" style={{ visibility: 'hidden' }} type="file" id="image" placeholder="Photo" onChange={this.handleFileSelected}></input>
                </div>
                <div className="button" onClick={() => this.editSickness()} type="button">
                    Save</div>
            </div>

        )
    }

}
export default EditSickness;
