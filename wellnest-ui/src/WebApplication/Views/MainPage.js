import React, { Component } from 'react';

export class MainPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>Diseases</li>
                        <li>Allergies</li>
                        <li>Vaccination</li>
                        <li>Analysis</li>
                        <li>New Diagnose</li>
                        <li>Check Status</li>
                    </ul>
                </div>
                <div>
                    <p>Covid information for user here</p>
                </div>
                <div>
                    <p>Covid information worldwide here</p>
                </div>
                
            </div>
        )
    }
}

export default MainPage
