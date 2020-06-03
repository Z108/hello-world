import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { withRouter, NavLink } from 'react-router-dom';

const BreadcrumbNameMap={
    '/apps':'页面List',
    '/apps/1':'one',
    '/apps/2':'two',
    '/apps/1/detail':'one详情',
    '/apps/2/detail':'two详情',
    

}


let Home=({location})=> {
    const arr=location.pathname.split('/').filter(i=>i)
    const extraBreadcrumbItems=arr.map((_,index)=>{
        const url=`/${arr.slice(0,index+1).join('/')}`
        return (
            <Breadcrumb.Item key={url}>
                <NavLink to={url}>{BreadcrumbNameMap[url]}</NavLink>
            </Breadcrumb.Item> 
        )
    })
    return (
        <div className='demo'>
            <div className='demo-nav'>
                <NavLink to='/'>页面Home</NavLink><br/>
                <NavLink to='/apps'>页面List</NavLink><br/>
                <NavLink to='/apps/1'>one</NavLink><br/>
                <NavLink to='/apps/1/detail'>one详情</NavLink><br/>
                <NavLink to='/apps/2'>two</NavLink><br/>
                <NavLink to='/apps/2/detail'>two详情</NavLink><br/>
            </div>

            <Breadcrumb>
            {
                [
                    <Breadcrumb.Item key='home'>
                    <NavLink to='/'>Home</NavLink>
                    
                    </Breadcrumb.Item>
                ].concat(extraBreadcrumbItems)
            }
                
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
        </div>
    )
    
}

export default withRouter(Home)