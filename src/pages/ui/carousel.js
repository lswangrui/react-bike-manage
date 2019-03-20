import React, { Component } from 'react';
import {Card, Carousel} from 'antd';

export default class Carousels extends Component {
  render () {
    return (
      <div>
        <Card title='文字背景轮播' className='cardTitle'>
          <Carousel autoplay effect='fade'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Carousel>
        </Card>
        <Card title='图片背景轮播' className='cardTitle slider-wrap'>
          <Carousel autoplay effect='fade'>
            <div><img src='/carousel-img/carousel-1.jpg'/></div>
            <div><img src='/carousel-img/carousel-2.jpg'/></div>
            <div><img src='/carousel-img/carousel-3.jpg'/></div>
          </Carousel>
        </Card>
      </div>
    )
  }
}