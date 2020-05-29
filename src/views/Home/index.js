import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios from 'axios';

class index extends Component {
    componentDidMount() {
        const { listData } = this.props;
        if (listData.length <= 0) {
            axios.get('/data.json').then(res => {
                console.log(res.datas);
                // this.props.listSuccess( res.data );
            });
        }
    }

    state = {
        search: ''
    }
    setSearch = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    filterFn() {
        let res = [];
        const { listData } = this.props;
        const { search } = this.state;
        res = listData.filter(v => {
            return v.title.includes(search);
        })
        return res;
    }

    render() {
        const { listDel, carAdd } = this.props;
        const { search } = this.state;

        const filterListtData = this.filterFn()

        return (
            <div>
                <input type="text" value={search} onChange={this.setSearch} />
                <button >按钮</button>
                home
                {
                    filterListtData.map(v => {
                        return (
                            <div key={v.id}>
                                {v.title} - {v.price}
                                <button onClick={ ()=>listDel(v.id) }>删除</button>
                                <button onClick={ ()=>carAdd(v) }>加入购物车</button>
                            </div>
                        )
                    })    
                }
            </div>
        )
    }
}

export default connect(
    (state) => {
        return { listData: state.listData }
    },
    {
        listSuccess(pyload) {
            return {type: 'list_success', pyload}
        },
        listDel(pyload) {
            return {type: 'list_del', pyload}
        },
        carAdd(pyload) {
            return {type: 'car_add', pyload}
        }
    }
)(index);