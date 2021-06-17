import React, { Component } from "react";
import './delete-sickness.css';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
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
            
                <Dialog open={!!this.props.model}>
                   

                    <div id="m-d">
                        <DialogTitle>
                            <div className="x-button">

                                <i class="fa fa-times x-b" aria-hidden="true" onClick={this.props.closeDeleteView}></i>
                            </div>
                            <div id="t-d">
                                <div>Are you sure you want to delete this disease?</div>

                            </div>
                        </DialogTitle>

                        <div id="d-con">
                            <div id="yes"
                                onClick={() => this.removeSickness(this.props.model.DiseasesID)}>YES</div>

                            <div id="no"
                                onClick={this.props.closeDeleteView}>NO</div>

                        </div>


                    </div>
                   
                </Dialog>


       

        )
    }
}
export default DeleteSickness;