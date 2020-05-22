
import './App.css';
import React, { Component } from 'react'
import qs from 'qs'
import {Route} from 'react-router-dom'
import Home from './component/Home'

export default class App extends React.Component {
 componentDidMount(){
   let data={
     username:'',
     password:''
   }
  fetch(
    'http://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f',
    {
      method:'post', //请求方式
      mode:'cors',  //跨域
      headers:{     //设置请求头
        "Content-Type":"application/x-www-form-urlencolded"
      },
      body:qs.stringify(data) //请求数据
    }
  ).then(res=>{
    if(res.ok)
    return res.json() //返回一个body对象，数据依然需要数据转换，转换过程中也是promise
    else
    return new Promise(res=>{res('请求资源找不到')})
  }).then(res=>{
    console.log(res);
  })

 }
  render() {
    return (
      <div>
          <Route path='/home' component={Home}/>
      </div>
    )
  }
}

