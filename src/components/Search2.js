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
    

// carousel
    // <div className="grid3">
    //                 <div id="carouselCaptions" className="carousel slide" data-ride="carousel">
    //                     <ol className="carousel-indicators">
    //                         <li data-target="#carouselCaptions" data-slide-to="0" className="active"></li>
    //                         <li data-target="#carouselCaptions" data-slide-to="1"></li>
    //                         <li data-target="#carouselCaptions" data-slide-to="2"></li>
    //                     </ol>
    //                     <div className="carousel-inner">
    //                         <div className="carousel-item active">
    //                             <div className="icon1">
    //                                 <img src={icon1} className="d-block w-100" alt="..."/>
    //                             </div>
    //                             <div className="carousel-caption d-none d-md-block">
    //                                 <h5>First slide label</h5>
    //                                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="carousel-item">
    //                         <img src="..." class="d-block w-100" alt="..."/>
    //                         <div class="carousel-caption d-none d-md-block">
    //                             <h5>Second slide label</h5>
    //                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //                         </div>
    //                     </div>
    //                     <div class="carousel-item">
    //                         <img src="..." class="d-block w-100" alt="..."/>
    //                         <div class="carousel-caption d-none d-md-block">
    //                             <h5>Third slide label</h5>
    //                             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //                         </div>
    //                     </div>
    //                     </div>