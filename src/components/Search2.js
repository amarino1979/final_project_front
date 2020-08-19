import React, { Component } from 'react'

export default class Search2 extends Component {
    render() {
        const tickerOptions = this.state.symbolList
        console.log(tickerOptions)
        return (
          <div className="container">
            <form className="search_form">
              <div className="search">
                <input className="search-bar"
                  placeholder={'Select stock..'}
                  value={this.state.currentValue}
                  onChange={this.handleChange}
                  list='stocks'
                />
                <datalist id='stocks'>
                {tickerOptions.length > 0 &&
                    tickerOptions.map((option_) => {
                      console.log('tick', option_)
                      return <option onClick={() => this.handleSelectClick(option_.name, option_.symbol)} value={option_.name}>
                        ${option_.name}
                      </option>
                    })
                  
                }
                </datalist>
              </div>
              <div>
              <button className="bttn" onClick={this.handleSubmit}
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
    