import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import icon from '../assets/stats-dots.png'

export default class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="icon">
                    <img src={icon} />
                </div>
                <a class="navbar-brand" href="/home"><i></i>Market Updates</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {/* <li><NavLink to="/home">Home</NavLink></li>
                                <li><NavLink to="/search">Search</NavLink></li> */}
                        <li class="nav-item active">
                            <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/search">Search</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
