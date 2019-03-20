import React, { Component } from 'react';
import {Card,Row,Col,Modal} from 'antd';

export default class Gallery extends Component {
  state={
    visible:false
  }
  openGallery=(item)=>{
    this.setState({
      currentImg:'/gallery/'+item,
      visible:true
    })
  }
  render () {
    const imgs = [
      ['1.png','2.png','3.png','4.png','5.png','11.png'],
      ['6.png','7.png','8.png','9.png','10.png','17.png'],
      ['11.png','12.png','13.png','14.png','15.png','2.png'],
      ['16.png','17.png','18.png','19.png','20.png','8.png'],
      ['21.png','22.png','23.png','24.png','25.png','14.png'],
      ['11.png','12.png','13.png','14.png','15.png','2.png']
    ]
    const imgList =imgs.map(list=>list.map(item=>
      <Card 
      cover={<img src={'/gallery/'+item}/>} 
      key={item} 
      onClick={()=>this.openGallery(item)}
      style={{marginBottom:10}}>
        <Card.Meta title="i love you" description="www.instagram.com" />
      </Card>
    ))
    return (
      <div>
        <Row gutter={10}>
          <Col md={4}>
            {imgList[0]}
          </Col>
          <Col md={4}>
            {imgList[1]}
          </Col>
          <Col md={4}>
            {imgList[2]}
          </Col>
          <Col md={4}>
            {imgList[3]}
          </Col>
          <Col md={4}>
            {imgList[4]}
          </Col>
          <Col md={4}>
            {imgList[5]}
          </Col>
        </Row>
        <Modal 
          footer={null}
          width={300}
          height={500}
          visible={this.state.visible} 
          title='图片画廊'
          onCancel={()=>{
            this.setState({visible:false})
          }}>
          <img src={this.state.currentImg} alt='' style={{width:'100%'}}/>
        </Modal>
      </div>
    )
  }
}