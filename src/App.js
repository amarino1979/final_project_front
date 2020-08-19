import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Search from './components/Search'
import NavBar from './components/NavBar'

let baseURL;
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/'
} else {
  baseURL = 'https://market-updates-api.herokuapp.com/'
}
console.log('current base URL:', baseURL)

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    )
  }
}
