import React, { Component } from 'react';
import {Card,Table} from 'antd';
import axios from '../../axios/index';

export default class basicTable extends Component {
    state = {
        dataSource2:[]
    }
    request = ()=>{
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1
                }
            }
        }).then((res)=>{
            if(res.code === 0){
                this.setState({
                    dataSource2:res.result
                })
            }
            
        })
    }
    componentDidMount() {
        const dataSource = [
            {
                id:0,
                userName:'java',
                sex:'1',
                status:'1',
                interest:'1',
                birthday:'2000-01-04',
                address:'江苏省青豆啊是',
                time:'09:00'
            },
            {
                id:1,
                userName:'java1',
                sex:'1',
                status:'1',
                interest:'1',
                birthday:'2000-01-04',
                address:'江苏省青豆啊是',
                time:'09:00'
            },
            {
                id:2,
                userName:'2222',
                sex:'1',
                status:'1',
                interest:'1',
                birthday:'2000-01-04',
                address:'江苏省青豆啊是',
                time:'09:00'
            },
        ]
        this.setState({
            dataSource
        })
        this.request()
    }
  render() {
    const columns = [
        {
            title:'id',
            dataIndex:'id'
        },
        {
            title:'用户名',
            dataIndex:'userName'
        },
        {
            title:'性别',
            dataIndex:'sex',
            render(sex){
                return sex==1?'男':'女'
            }
        },
        {
            title:'状态',
            dataIndex:'status',
            render(status){
                let config = ['咸鱼','风华','才子','fe','创业者'];
                return config[status-1]
            }
        },
        {
            title:'爱好',
            dataIndex:'interest',
            render(status){
                let config = ['游泳','打烂起','才子','fe','创业者','才子','fe','创业者','才子','fe','创业者'];
                return config[status-1]
            }
        },
        {
            title:'生日',
            dataIndex:'birthday'
        },
        {
            title:'地址',
            dataIndex:'address'
        },
        {
            title:'早起时间',
            dataIndex:'time'
        },
    ]
    return (
      <div>
        <Card title='基础表格' className='cardTitle'>
            <Table
            bordered
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource}
            />
        </Card>
        <Card title='动态数据渲染表格' className='cardTitle'>
            <Table
            bordered
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource2}
            />
        </Card>
      </div>
    )
  }
}
