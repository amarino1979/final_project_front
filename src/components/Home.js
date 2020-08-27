import React, { Component } from 'react'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <>
                <div class="grid-container">
                    <div className="grid1"></div>
                    <div className="grid2">
                    <div className="jumbotron">
                        <h1 className="display-4">Welcome to Market Updates!</h1>
                        <p className="lead">We have created a simple way to look up your favorite stocks and mutual funds for the day. </p>
                        <hr className="my-4" />
                        <p className="jumbo-text">What you will find is different about market updates is that so that you can get real-time quotes for several of them at the same time.</p>
                        <p className="jumbo-text">Make sure that you save your stocks so they will show up in the portfolio for later!</p>
                        <a className="btn btn-info btn-lg" href="/search" role="button">Learn more</a>
                    </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </>
        )
    }
}
