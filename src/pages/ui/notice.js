import React, { Component } from 'react'
import {Button,Card,notification} from 'antd'

export default class Notices extends Component {
    openNotification = (type,direction) => {
        if(direction){
            notification.config({
                placement:direction
            })
        }
      notification[type]({
        message:'啦啦啦啦',
        description:'施工哦啊等片刻'
      })
    }
    
    render() {
        return (
            <div>
                <Card title='通知提醒框' className='cardTitle'>
                    <Button type='primary' onClick={()=>this.openNotification('success')}>Success</Button>
                    <Button type='primary' onClick={()=>this.openNotification('info')}>Info</Button>
                    <Button type='primary' onClick={()=>this.openNotification('warning')}>Warning</Button>
                    <Button type='primary' onClick={()=>this.openNotification('error')}>Error</Button>
                </Card>
                 <Card title='通知提醒框' className='cardTitle'>
                    <Button type='primary' onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
                    <Button type='primary' onClick={()=>this.openNotification('info','topRight')}>Info</Button>
                    <Button type='primary' onClick={()=>this.openNotification('warning','bottomLeft')}>Warning</Button>
                    <Button type='primary' onClick={()=>this.openNotification('error','bottomRight')}>Error</Button>
                </Card>
            </div>
        )
    }
}
