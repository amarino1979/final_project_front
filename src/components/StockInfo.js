import React, { Component, Fragment } from 'react'
import StockCard from './StockCard'

export default class StockInfo extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                {this.props.stocks.length > 0 &&
                    this.props.stocks.map((stock) => {
                        return <StockCard
                            name={stock.name}
                            symbol={stock.symbol}
                            open={stock.open}
                            high={stock.high}
                            low={stock.low}
                            price={stock.price}
                            volume={stock.volume}
                            latestTradingDay={stock.latestTradingDay}
                            previousClose={stock.previousClose}
                            change={stock.change}
                        />
                    })
                }
            </Fragment>
        )
    }
}
