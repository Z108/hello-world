import './App.css';

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import Home from './views/Home'
import Login from './views/Login'

class App extends Component {
  render() {
    
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />

          <Route path="/" render={() => {
            if (this.props.isLogin) {
              return (
                <Switch>
                  <Route path="/home" component={Home} />
                  <Redirect to="/home" />
                </Switch>
              )
            } else {
              return <Redirect to="/login" />
            }

          }} />
        </Switch>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      isLogin: state.isLogin
    }
  },
  null
)(App);
