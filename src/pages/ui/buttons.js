import React, { Component } from 'react'
import { Card,Button,Radio } from 'antd';
import './ui.less';
export default class Buttons extends Component {
  state = {
    loading:true,
    size:'default'
  }
  handleCloseLoading = ()=>{
    this.setState({
      loading:false
    })
  }
  handleOpenLoading = () => {
    this.setState({
      loading:true
    })
  };
  handleChange = (e) => {
    this.setState({
      size:e.target.value
    })
  };
  
  
  render() {
    return (
      <div>
        <Card title='基础按钮' className='cardTitle'>
          <Button type='primary'>Immoc</Button>
          <Button>Immoc</Button>
          <Button type='dashed'>Immoc</Button>
          <Button type='danger'>Immoc</Button>
          <Button disabled>Immoc</Button>
        </Card>
        <Card title='图形按钮' className='cardTitle'>
          <Button icon='plus'>创建</Button>
          <Button icon='edit'>编辑</Button>
          <Button icon='delete'>删除</Button>
          <Button shape='circle' icon='search'></Button>
          <Button icon='search' type='primary'>搜索</Button>
          <Button icon='download' type='primary'>下载</Button>
        </Card>
        <Card title='Loading按钮' className='cardTitle'>
          <Button type='primary' loading={this.state.loading}>确定</Button>
          <Button type='primary' shape='circle' loading={this.state.loading}></Button>
          <Button loading={this.state.loading} onClick={this.handleOpenLoading}>点击加载</Button>
          <Button shape='circle' loading={this.state.loading}></Button>
          <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title='按钮组' className='cardTitle'>
          <Button.Group>
            <Button type='primary' icon='left' style={{marginRight:0}}>返回</Button>
            <Button type='primary' icon='right'>前进</Button>
          </Button.Group>
        </Card>
        <Card title='按钮尺寸' className='cardTitle'>
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value='small'>小</Radio>
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </Radio.Group>
          <Button type='primary' size={this.state.size}>Immoc</Button>
          <Button size={this.state.size}>Immoc</Button>
          <Button type='dashed' size={this.state.size}>Immoc</Button>
          <Button type='danger' size={this.state.size}>Immoc</Button>
        </Card>
      </div>
    )
  }
}
