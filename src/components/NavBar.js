import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <h1>Market Updates</h1>
                <ul id="nav">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                </ul>
            </nav>
        )
    }
}
