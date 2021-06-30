import React, { Component } from "react";
import './delete-users.css'
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'



class DeleteUser extends Component{

  
    removeUser(Id) {
      fetch('http://localhost:5000/API/User/'+Id,{
          method:'DELETE',
          header:{'Accept':'application/json',
          'Content-Type':'application/json'}
      }).then(() => this.props.refreshList())
    }
    render() {
        return (
          <Dialog className="dialog-wrapper" open={!!this.props.model}>
          
            <div class="dialog">
              <DialogTitle>
                <div className="x-button">
                  
                <i class="fa fa-times" aria-hidden="true" onClick={this.props.closeDeleteView}></i>
                </div>
                <div className="title">
                  <div>Are you sure you want to delete this user</div>
                  
                  </div>
              </DialogTitle>
              <DialogContent class="d-container">
                
                <div className="yes-button"
                  onClick={() => this.removeUser(this.props.model.Id)}>YES</div>
                
               
                <div className="no-button"
                 onClick={this.props.closeDeleteView}>NO</div>
                
              </DialogContent></div>
          </Dialog>
        )
}
}
export default DeleteUser