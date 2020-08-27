
export const getBaseURL = () => {
    let baseURL;
    if (process.env.NODE_ENV === 'development') {
      baseURL = 'http://localhost:5000/'
    } else {
      baseURL = 'https://market-updates-api.herokuapp.com/'
    }
    return baseURL
}

export const alphaURL = 'https://www.alphavantage.co/query?'

export const symbolFunction = 'function=SYMBOL_SEARCH&' 

export const globalFunction = 'function=GLOBAL_QUOTE&'

export const buildStock = (data, name) => {
  // console.log(data,name)
  return {
    name: name, 
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
  }
}


