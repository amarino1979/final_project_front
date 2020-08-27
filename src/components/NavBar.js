import React, { Component } from 'react'
import icon from '../assets/stats-dots.png'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="icon">
                    <img src={icon} alt="Market Updates icon"/>
                </div>
                <a className="navbar-brand" href="/home"><i></i>Market Updates</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li><NavLink to="/home">Home</NavLink></li>
                                <li><NavLink to="/search">Search</NavLink></li> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/search">Search</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
