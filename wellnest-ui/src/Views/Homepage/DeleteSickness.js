import React, { Component } from "react";
import './delete-sickness.css';
class DeleteSickness extends Component {

    removeSickness(id) {
        fetch('http://localhost:5000/api/diseases/' + id, {
            method: 'DELETE',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => this.props.refreshList())
    }
    render() {
        return (
            <div class="dialog">
                <div className="title">
                    <div>Are you sure you want to delete this product</div>
                </div>
                <div className="yes-button"
                    onClick={() => this.removeSickness(this.props.model.diseasesID)}>YES</div>
                <div className="no-button"
                    onClick={this.props.closeDeleteView}>NO</div>

            </div>
        )
    }
}
export default DeleteSickness;