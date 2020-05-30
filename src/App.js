
import './App.css';
import React, { Component } from 'react'
import store from './reducers/store'



 class App extends Component {
  constructor(...args){
    super(...args)
    this.state={
      data:store.getState()
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        data:store.getState()
      })
    })
  }
  dispatchFn=()=>{
    store.dispatch({type:'onList_add'})
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <button onClick={this.dispatchFn}>修改</button>
      </div>
    )
  }
}
export default App