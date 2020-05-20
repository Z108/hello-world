import React, { Component } from 'react'

export default class Child extends Component {
    constructor(...args){
        super(...args)
        this.inp=React.createRef()
      }
    render() {
        return (
            <div>
                <input type="text" id="Child" ref={this.inp}/>
            </div>
        )
    }
    componentDidMount(){
        console.log('child:',this.inp.current);
    }
}
