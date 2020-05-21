
import './App.css';
import React, { Component } from 'react'
import LogHoc from './HOCcomponents/LogHoc'
import Child from './component/Child'
class App extends Component {
  state={
    name:'李四'
  }
  render() {
    let {name}=this.state
    return (
      
      <div>
        <Child name={name}/>
      </div>
    )
  }
}


export default App;
