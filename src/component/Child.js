import React, { Component } from 'react'

export default class Child extends Component {
    state={
        x:0,
        y:0
    }
    componentDidMount(){
        document.addEventListener('mousemove',(e)=>{
            console.log(e);
            this.setState({
                x:e.clientX-250/2,
                y:e.clientY-250/2
            })
        })
    }
    render() {
        // let {children}=this.props
        // return (
        //     <div style={{
        //         position:'fixed',
        //         left:'50%',
        //         top:'50%',
        //         width:300,
        //         height:200,
        //         marginLeft:-150,
        //         marginTop:-100,
        //         background:"#aa"
        //     }}>
        //         {children}
        //     </div>
        // )
            const {render}=this.props
            const {x,y}=this.state
            return (
                <div>
                    {render(x,y)}
                </div>
            )



    }
}
