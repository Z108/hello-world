import './App.css';

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import Home from './views/Home'
import Login from './views/Login'
import {synvUserListSet,userListSet,userListUpdate,userListDel,userListAdd} from './action/index'
// class App extends Component {
//   render() {
    
//     return (
//       <div>
//         <Switch>
//           <Route path="/login" component={Login} />

//           <Route path="/" render={() => {
//             if (this.props.isLogin) {
//               return (
//                 <Switch>
//                   <Route path="/home" component={Home} />
//                   <Redirect to="/home" />
//                 </Switch>
//               )
//             } else {
//               return <Redirect to="/login" />
//             }

//           }} />
//         </Switch>
//       </div>
//     )
//   }
// }

// export default connect(
//   (state) => {
//     return {
//       isLogin: state.isLogin
//     }
//   },
//   null
// )(App);



class App extends Component {
    render() {
      let {userlist,synvUserListSet,userListSet,userListUpdate,userListDel,userListAdd}=this.props
      console.log(userlist);
      return (
        <div>
            {/* {
              userlist.map((v,i)=>{
                  return {v}
              })
            } */}
            <button onClick={()=>userListAdd(123)}>add</button>
            <button onClick={()=>userListDel(456)}>deleta</button>
            <button onClick={()=>userListUpdate(789)}>update</button>
            <button onClick={()=>userListSet(666)}>set</button>
            <button onClick={()=>synvUserListSet(999)}>http</button>
        </div>
      )
    }
  }
  
  export default connect(
    (state) => {
      return {
        userlist: state.userList
      }
    },
   {
    synvUserListSet,userListSet,userListUpdate,userListDel,userListAdd
   }
  )(App);
