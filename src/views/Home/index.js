import React, { Component } from 'react'
import { Table, Modal, Space, Checkbox } from 'antd';
import HomeTableModule from './model'


export default class index extends Component {
    state = {
        visible:false,
        defaultData:{},
        columns: [
            {
                title: 'isok',
                dataIndex: 'isok',
                key: 'isok',
                render: text =>{
                    return <Checkbox defaultData={text}/>
                }
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Action',
                key: 'action',
                dataIndex:'id',
                render: (text, context,index) => (
                    <>
                        <a onClick={()=>this.updateBtn(context)}>Update</a>
                        <a onClick={()=>this.delFn(text)}>Delete</a>
                    </>
                )
            }
        ],
        data : [
            {
              id: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
              isok:true
            },
            {
              id: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
              isok:false
            },
            {
              id: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
              isok:false
            }
          ]
    }
    delFn=(id)=>{
        alert(id)
    }
    updateBtn=(context)=>{
        console.log(context);
        this.setState({
            defaultData:{...context}
        })
        this.setVisible(true)
    }
    setVisible=(status)=>{
        this.setState({
            visible:status
        })
    }
    onCreate=(value)=>{
        console.log(value);
        this.setVisible(false)
    }
    render() {
        let {data,columns,visible,defaultData}=this.state
        return (
            <>
            <Table rowKey='id' columns={columns} dataSource={data} />

            <HomeTableModule
            visible={visible}
            onCreate={this.onCreate}
            onCancel={()=>{
                this.setVisible(false)
            }}
            defaultData={defaultData}

            
            />
            </>
        )
    }
}
