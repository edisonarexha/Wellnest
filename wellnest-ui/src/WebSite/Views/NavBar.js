import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './Homepage/logo.PNG';


export default class NavBar extends Component {
    render() {
        return (

            <div className="nav-div">
                <ul >
                    <img className="ul-1" src={logo} alt="Logo" />
                </ul>
                <ul className="ul-2">
                    <Link to="/">
                        <li className="li-1">Home</li>
                    </Link >
                    <Link to="/mainpage">
                    </Link>
                    <li className="li-2">Mainpage</li>
                    <Link to='/admin'>
                        <li className="li-6">Dashboard</li>
                    </Link>
                </ul>
                <ul className="ul-3">
                    {/* <div id="s-d">
                        <input type="search" placeholder="Search" id="search-i" />
                        <img src={search} id="i-s" alt="search" />
                    </div> */}
                    <Link to='/profile'>
                        <li className="li-5" >Profile</li>
                    </Link>

                </ul>
            </div>
        )
    }
}
