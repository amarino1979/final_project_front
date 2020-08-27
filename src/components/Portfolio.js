import React, { Component } from 'react'
import StockCard from './StockCard'
import {getBaseURL, alphaURL, globalFunction, buildStock} from '../config/configs'


export default class Portfolio extends Component {
    state = {
        stocks: [],
    }
    
    componentDidMount = async() => {
        let stockSymbol = []
        const urls = [
            `${getBaseURL()}markets/market`,
            `${getBaseURL()}markets/stocks`
        ]
        await Promise.all(urls.map(url => fetch(url)))
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(async (data) => {
                // console.log(data)
                data[1].forEach(stock => stockSymbol.push({name: stock.name, symbol: stock.symbol, id: stock._id}))
                await this.setState({apikey: '&apikey=' + data[0].firstKey, simpleData: stockSymbol})
                //push symbols into 'stockSymbol' array
                //set state for first key
            })
            await Promise.all(stockSymbol.map(symbol => fetch(alphaURL + globalFunction + 'symbol=' + symbol.symbol + this.state.apikey)))
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(async (data) => {
                // console.log(data)
                let savedStocks = []
                if(data.Note){
                    alert("Whoa, not so fast!")
                } else {
                    data.forEach(stock => {
                        const name = this.state.simpleData.find(x => {
                            if(x.symbol === stock['Global Quote']['01. symbol']){
                                alert("Slow API...Give me a second!")
                                return x.name
                            }
                        })
                        savedStocks.push(buildStock(stock, name.name))
                    })
                    // const stocks = buildStock(this.state.stocks, data, this.state.currentValue)
                //   console.log(savedStocks)
                  this.setState({stocks: savedStocks})
                }
            })
            //Make another call to alpha with symbols and get stocks
            //Set those stocks to state 'stocks'

        //   console.log(this.state, stockSymbol)
      }

      deleteStock = (symbol) => {
        // console.log(this.state.stocks)
        const stockId = this.state.simpleData.find(stock => stock.symbol === symbol)
        // console.log(stockId.id)
        const newStocks = this.state.stocks.filter(stock => stock.symbol !== symbol )
        this.setState({stocks: newStocks})
        fetch(`${getBaseURL()}markets/${stockId.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors'
        })
      }

    render() {
        return (
            <div>
                <div className="card-container">
                {
                    this.state.stocks.length > 0 &&
                    this.state.stocks.map(stock => {
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
                                    deleteStock={this.deleteStock}
                            /> 
                        })
                    }
                    </div>
            </div>
        )
    }
}
