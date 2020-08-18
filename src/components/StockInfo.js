import React, { Component } from 'react'

export default class StockInfo extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="stock-attr">
                <h2>Name: {this.props.stock[0].name}</h2>
                <h3>Symbol: {this.props.stock[0].symbol}</h3>
                <h3>Open: {this.props.stock[0].open}</h3>
                <h3>High: {this.props.stock[0].high}</h3>
                <h3>Low: {this.props.stock[0].low}</h3>
                <h3>Price: {this.props.stock[0].price}</h3>
                <h3>Volume: {this.props.stock[0].volume}</h3>
                <h3>Latest Trading Day: {this.props.stock[0].latestTradingDay}</h3>
                <h3>Previous Close: {this.props.stock[0].previousClose}</h3>
                <h3>Change: {this.props.stock[0].change}</h3>
                <h3>Change Percent: {this.props.stock[0].changePercent}</h3>
            </div>
        )
    }
}
