import React, { Component } from 'react'
import Select from 'react-select'
import StockInfo from './StockInfo'

let baseURL;
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/'
} else {
  baseURL = 'https://market-updates-api.herokuapp.com/'
}

export default class Search extends Component {
    constructor (props) {
        super(props) 
        this.state = {
          baseURL: 'https://www.alphavantage.co/query?',
          function: 'function=GLOBAL_QUOTE&',
          apikey: '',
          currentValue: '',
          symbolList: [],
          stocks: []
        }
      }
    
      handleChange = async (event) => {
        this.setState({currentValue: event.target.value})
        const keyword = 'keywords=' + event.target.value
        const symbolfunction = 'function=SYMBOL_SEARCH&'
        
        const searchURL = this.state.baseURL + symbolfunction + keyword + this.state.apikey
        const symList = []
        await fetch(searchURL)
          .then(response => response.json())
          .then((data) => {
            if (data.bestMatches){
              data.bestMatches.map(match => symList.push({name: match['2. name'], symbol: match['1. symbol']}))
            }
          })
          this.setState({ symbolList: symList})
      }
    
      handleSubmit = async (event) => {
        event.preventDefault()
        const symbol = 'symbol=' + this.state.currentSymbol
        const searchURL = this.state.baseURL + this.state.function + symbol + this.state.apikey
        await fetch(searchURL)
          .then(response => response.json())
          .then(data => this.setState({stocks: [...this.state.stocks, {
            name: this.state.currentValue, 
            symbol: data['Global Quote']['01. symbol'], 
            open: data['Global Quote']['02. open'],
            high: data['Global Quote']['03. high'],
            low: data['Global Quote']['04. low'],
            price: data['Global Quote']['05. price'],
            volume: data['Global Quote']['06. volume'],
            latestTradingDay: data['Global Quote']['07. latest trading day'],
            previousClose: data['Global Quote']['08. previous close'],
            change: data['Global Quote']['09. change'],
            changePercent: data['Global Quote']['10. change percent'],
          }]}))
          this.setState({currentValue: '' })
      }
    
      componentDidMount = async() => {
        const apiUrl = `${baseURL}markets/market`;
        await fetch(apiUrl)
          .then((response) => response.text())
          .then(async (data) => {
            await this.setState({apikey: '&apikey=' + data})
          })
      }
    
      handleSelectClick = (name, symbol) => {
        this.setState({currentValue: name, symbolList: [], currentSymbol: symbol})
      }
    
      deleteStock = (symbol) => {
        console.log(this.state.stocks)
        const newStocks = this.state.stocks.filter(stock => stock.symbol !== symbol )
        this.setState({stocks: newStocks})
      }

      render() {
        const tickerOptions = this.state.symbolList
        return (
          <div className="container">
            <form className="search_form">
              <div>
              <label htmlFor='keywords'>Ticker</label>
              </div>
              <div className="search">
                <input
                  placeholder={'Select stock..'}
                  value={this.state.currentValue}
                  onChange={this.handleChange}
                />
                {tickerOptions.length > 0 &&
                  <select value={tickerOptions.name} size={tickerOptions.length}>
                    {
                    tickerOptions.map((option_) => {
                      return <option onClick={() => this.handleSelectClick(option_.name, option_.symbol)} value={option_.name}>
                        ${option_.name}
                      </option>
                    })
                  }
                  </select>
                }
              </div>
              <div>
              <button onClick={this.handleSubmit}
                type="submit"
                >search</button>
                </div>
            </form>
            {this.state.stocks.length > 0 &&
            <StockInfo 
              stocks={this.state.stocks}
              deleteStock={this.deleteStock}
            /> 
            }
          </div>
        )
      }
    }
    