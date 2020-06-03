import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './view/home'
import Upload from './view/upload'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Route path='/' component={Home} /> */}
                <Home></Home>
                <Upload></Upload>
            </div>
        )
    }
}
