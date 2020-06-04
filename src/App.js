import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './view/home'
import Upload from './view/upload'
import Axios from 'axios'
// Axios.get("/manage")
export default class App extends Component {
    render() {
        return (
            <div id='App'>
                <button type='primary'>click</button>
                {/* <Route path='/' component={Home} /> */}
                {/* <Home></Home> */}
                {/* <Upload></Upload> */}
            </div>
        )
    }
}


