import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import './css.css'
const style = {
    height: 300,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };
  
 
export default class index extends Component {
    state = {
        items: [
            './img/b2.gif','./img/b3.gif','./img/b4.gif','./img/b5.gif','./img/b6.gif','./img/b7.gif','./img/b9.gif'
        ]
      };
    
      fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }))
          });
        }, 1500);
      };
    render() {
        return (
            <div>
            <h1>demo: react-infinite-scroll-component</h1>
            <hr />
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {this.state.items.map((value, index) => (
                <div style={style} key={index}>
                    <img src={value} alt=""/>
                  div - #{index}
                </div>
              ))}
            </InfiniteScroll>
          </div>
        )
    }
}
