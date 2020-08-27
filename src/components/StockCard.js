import React, { Component } from 'react'

export default class StockCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="container">
                    <span>Name: {this.props.name}</span>
                    <span>Symbol: {this.props.symbol}</span>
                    <span>Open: {this.props.open}</span>
                    <span>High: {this.props.high}</span>
                    <span>Low: {this.props.low}</span>
                    <span>Price: {this.props.price}</span>
                    <span>Volume: {this.props.volume}</span>
                    <span>Latest Trading Day: {this.props.latestTradingDay}</span>
                    <span>Previous Close: {this.props.previousClose}</span>
                    <span>Change: {this.props.change}</span>
                </div>
                <div className="btn-container">
                { this.props.savedStock && 
                <button className="btn"
                    onClick={() => this.props.savedStock({name: this.props.name, symbol: this.props.symbol})}
                    type="submit"
                >
                    Save
                </button>
                }
                <button className="btn"
                    onClick={() => this.props.deleteStock(this.props.symbol)}
                    type="submit"
                >
                    Delete
                </button>
                </div>
            </div>
        )
    }
}
