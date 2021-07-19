import React, { Component, useState } from "react";
import "./adminpannel.css";
import AddSickness from './AddSickness';
import { Link } from 'react-router-dom';

class Add_S extends Component {
    
    render() {
        return (
            <div>
                <div className="admin-header">
                    <span>Dashboard</span>
                    <div className="right-header-buttons">
                        <div className="back-button">
                            <Link to='/'>
                                <span id="span1">Back to Home </span>
                            </Link>

                        </div>
                        <div className="logout-button">
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
                <div className="admin-wrapper">
                    <div className="dashboard-container">
                        <div className="left-list">
                            <div className="action-btn">Users</div>
                            <div className="action-btn">Users-messages</div>
                            <div className="action-btn">Add Sickness</div>
                            <div className="action-btn">Add Doctors</div>
                        </div>
                    </div>
                    <div>
                        <AddSickness />
                    </div>
                </div>
        </div>
    );
  }
}

export default Add_S;
