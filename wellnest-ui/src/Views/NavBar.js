import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './Homepage/logo.PNG';
import search from './Homepage/search.PNG';


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
                    </Link>
                    <li className="li-2">About</li>
                    <Link to="/covid">
                        <li className="li-3">Covid-19</li>
                    </Link>
                    <Link to='/contact'>
                        <li className="li-4">Contact</li>
                    </Link>

                    <Link to='/admin'>
                        <li className="li-6">Dashboard</li>

                    </Link>


                </ul>
                <ul className="ul-3">
                    <div id="s-d">
                        <input type="search" placeholder="Search" id="search-i" />
                        <img src={search} id="i-s" alt="search" />
                    </div>
                    <Link to='/profile'>
                        <li className="li-5" >Profile</li>
                    </Link>

                </ul>
            </div>
        )
    }
}
