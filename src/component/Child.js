import React, { Component } from 'react'
import LogHoc from '../HOCcomponents/LogHoc'
class Child extends Component {
    render() {
        let {arr,name}=this.props
        return (
            <div>
                Child
                <h2>{name}</h2>
                <ul>
                    {
                        arr.map((v,i)=>{
                            return <li key={i}>{v}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default LogHoc(Child,'./data.json')
