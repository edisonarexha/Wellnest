import React, { Component } from "react";
import './edit-sickness.css';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
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

        fetch('http://localhost:5000/api/diseases/SaveFile', {
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
            <Dialog id="dialog1" open={!!this.props.model}>
                <div id="dialogd1">
                    <DialogTitle>
                        <div className="edit-div">
                            <div>Edit Diseases</div>
                            <i class="fa fa-times x-b" aria-hidden="true" onClick={this.props.closeEditView}></i>
                        </div>
                    </DialogTitle>
                    <DialogContent class="container1">
                        <label className="label1">Name</label>
                        <input class="name" type="text" placeholder="Name" value={this.state.Name} onChange={this.setName}></input>
                        <label>Information</label>
                        <textarea class="information" type="text" placeholder="information" value={this.state.information} onChange={this.setInformation}></textarea>
                        {this.state.PhotoName ?
                            <span><img id="ph-1" src={"http://localhost:5000/api/diseases/GetPhoto/" + this.state.PhotoName} height="220px" /> </span> : ""}
                        <div className="imgg-div">
                            <label for="image" className="la-div">{this.state.PhotoName ? 'Change Image' : 'Select Image'}</label>
                            <input class="photo" style={{ visibility: 'hidden' }} type="file" id="image" placeholder="Photo" onChange={this.handleFileSelected}></input>
                        </div>
                        <div className="bu-div" onClick={() => this.editSickness()} type="button">Save</div>

                    </DialogContent>
                </div>
            </Dialog >


        )
    }

}
export default EditSickness;
