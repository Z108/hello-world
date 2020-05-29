import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {loginSuccess} from '../../action/index'
import { connect } from 'react-redux'

class index extends Component {
    submitFn = () => {
        this.props.loginSuccess();
        this.props.history.push('/home');
    }
    

    render() {
        return (
            <div>
                login
                <button onClick={this.submitFn}>登录</button>
            </div>
        )
    }
}
export default connect(
    null, // 读取state中的值
    {
        loginSuccess
    }  // 设置state中的值
)( withRouter(index) )