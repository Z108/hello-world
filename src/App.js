

import './App.css';
import React, { Component } from 'react'
import Child from './component/Child'
import ReactDOM from 'react-dom'
export default class App extends Component {
  constructor(...args){
    super(...args)
    this.userName3=React.createRef()
    this.Child=React.createRef()
  }
  render() {
    return (
      <div>
          <input type="text" ref='userName' id="userName"/>
          <input type="text" ref={(dom)=>{this.userName2=dom}} id="userName2"/>
          <input type="text" ref={this.userName3} id="userName3"/>
          <Child ref={this.Child}/>
      </div>
    )
  }
  componentDidMount(){
    // console.log(this.refs.userName,this.refs.userName==document.getElementById('userName'));
    // console.log(this.userName2,this.userName2==document.getElementById('userName2'));
    // console.log(this.userName3,this.userName3.current==document.getElementById('userName3'));
    let dom=ReactDOM.findDOMNode(this.Child.current)
    console.log(dom);
    console.log('App:',this.Child.current.inp.current);
  }
}
