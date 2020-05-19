import React from 'react';
import './App.css';
import Header from './Header'
// import Footer from './Footer'
class App extends React.Component{
  constructor(...args){
    super(...args)
    this.state={
      num:1,
      str:'one'
    }
  }
  fn=()=>{
    // this.setState({
    //   num:this.state.num+1
    // })
    // this.setState({
    //   num:this.state.num+1
    // })                         //异步代码

    // this.setState(function(oldstate){
    //   return {
    //     num:oldstate.num++
    //   }
    // })
    // this.setState(function(oldstate){
    //   return {
    //     num:oldstate.num++
    //   } 
    // })                        //同步代码
    // console.log(this.state.num)
   
    setTimeout(() => {
      this.setState({
          num:this.state.num++
        })                       //异步代码

        // this.setState(function(oldstate){
        //   return {
        //     num:oldstate.num++
        //   } 
        // })            //同步代码
    }, 0);
   
  }
  btn=(val)=>{
    console.log(val)
    this.setState({
      str:val
    })
  }
  render(){
    let {num,str}=this.state
    return (
      <div>
        <Header tit='导航' num={num}/>
        <Header tit='头部' num={num}/>
        {/* <Header /> */}
        {/* <Footer btn={this.btn} str={str}/> */}
        <button onClick={this.fn}>add</button>
      </div>
    )
  }


}

export default App;
