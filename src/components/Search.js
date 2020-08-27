import React, { Component } from 'react'
import StockInfo from './StockInfo'
import {getBaseURL, alphaURL, globalFunction, symbolFunction, buildStock} from '../config/configs'


export default class Search extends Component {
    constructor (props) {
        super(props) 
        this.state = {
          apikey: '',
          currentValue: '',
          symbolList: [],
          stocks: []
        }
      }
    
      handleChange = async (event) => {
        this.setState({currentValue: event.target.value})
        const keyword = 'keywords=' + event.target.value
        // const symbolfunction = 'function=SYMBOL_SEARCH&'
        
        const searchURL = alphaURL + symbolFunction + keyword + this.state.apikey
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
        const searchURL = alphaURL + globalFunction + symbol + this.state.secondApiKey
        await fetch(searchURL)
          .then(response => response.json())
          .then(data => {
            // console.log(data.Note)
             if (data.Note) {
               alert("Whoa, not so fast!")
            } else {
              const stocks = buildStock(data, this.state.currentValue)
              // console.log(stocks)
              this.setState({stocks:[...this.state.stocks, stocks]})
            }})
          // console.log(this.state)
          this.setState({currentValue: '' })
      }
    
      componentDidMount = async() => {
        const apiUrl = `${getBaseURL()}markets/market`;
        await fetch(apiUrl)
          .then((response) => response.json())
          .then(async (data) => {
            // console.log(data)
            await this.setState({apikey: '&apikey=' + data.firstKey, secondApiKey: '&apikey=' + data.secondKey})
          })
      }
    
      handleSelectClick = (name, symbol) => {
        this.setState({currentValue: name, symbolList: [], currentSymbol: symbol})
      }
    
      deleteStock = (symbol) => {
        // console.log(this.state.stocks)
        const newStocks = this.state.stocks.filter(stock => stock.symbol !== symbol )
        this.setState({stocks: newStocks})
      }

      savedStock = (stock) => {
        // console.log(stock)
      // const postURL = "markets/newStock"
      const savedURL = `${getBaseURL()}markets/newStock`
       fetch(savedURL, {
         method: 'POST',
         json: true,
         headers: new Headers({
           'content-type': 'application/json'
         }),
         mode: 'cors',
         body: JSON.stringify(stock)
       })


        .then((response) => {
          // console.log(response.body)
          return
        })
        
      }

      render() {
        const tickerOptions = this.state.symbolList
        return (
          <div className="container">
            <form className="search_form">
              <div className="search">
                <input className="search-bar"
                  placeholder={'Select a stock...'}
                  value={this.state.currentValue}
                  onChange={this.handleChange}
                  list='stocks'
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
              <button className="bttn" onClick={this.handleSubmit}
                type="submit"
                >search</button>
                </div>
            </form>
            {this.state.stocks.length > 0 &&
            <div className="card-container">
            <StockInfo 
              stocks={this.state.stocks}
              deleteStock={this.deleteStock}
              savedStock={this.savedStock}
            />
            </div> 
            }
          </div>
        )
      }
    }
    