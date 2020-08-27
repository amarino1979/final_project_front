import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Search from './components/Search'
import Portfolio from './components/Portfolio'
import NavBar from './components/NavBar'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    )
  }
}
