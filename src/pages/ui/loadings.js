import React, { Component } from 'react'
import {Card,Spin,Icon,Alert} from 'antd'
export default class Loadings extends Component {
  render() {
    const icon = <Icon type='loading' style={{fontSize:24}}/>
    return (
      <div>
        <Card title='Spin用法' className='cardTitle'>
            <Spin size='small'/>
            <Spin size='default' style={{margin:'0 10px'}}/>
            <Spin size='large'/>
            <Spin indicator={icon} style={{marginLeft:10}}/>
        </Card>
        <Card title='内容遮罩' className='cardTitle'>
            <Alert className='cardTitle' message='React' description='欢迎学习react' type='info'/>
            <Spin>
                <Alert className='cardTitle' message='React' description='欢迎学习react' type='warning'/>
            </Spin>
            <Spin tip='加载中...'>
                <Alert className='cardTitle' message='React' description='欢迎学习react' type='info'/>
            </Spin>
            <Spin tip='加载中...' indicator={icon}>
                <Alert className='cardTitle' message='React' description='欢迎学习react' type='info'/>
            </Spin>
        </Card>
      </div>
    )
  }
}
