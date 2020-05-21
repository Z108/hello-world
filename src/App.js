
import './App.css';
import React, { Component } from 'react'
import Child from './component/Child'

export default class App extends Component {
  state={
    name:'XXX'
  }
  fn=()=>{
    console.log(111);
  }
  render() {
    return (
      <div>
        aaa
        {/* <Child>
          <p>A1</p>
          <p>A2</p>
          <p>{this.state.name}</p>
          <button onClick={this.fn}>点击</button>
        </Child> */}

        <Child render={(x,y)=>{
          return <img width={250} height={250}  src="/logo192.png" style={{position:'fixed',left:x,top:y}}/>
        }} />
      </div>
    )
  }
}

