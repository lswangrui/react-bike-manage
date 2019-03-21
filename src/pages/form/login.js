import React, { Component } from 'react';
import {Card,Form,Input,Button,Icon,message,Checkbox} from 'antd';

class FormLogin extends Component {

  handleSubmit=()=>{
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err,value)=>{
      if(!err){
        message.success(`${userInfo.userName} - ${userInfo.userPwd}`)
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Card title='登录行内表单' className='cardTitle'>
          <Form layout='inline'>
            <Form.Item>
              <Input placeholder='请输入用户名'/>
            </Form.Item>
            <Form.Item>
              <Input type='password' placeholder='请输入密码'/>
            </Form.Item>
            <Form.Item>
              <Button type='primary'>登录</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title='登录水平表单'>
          <Form style={{width:300}}>
            <Form.Item>
              {
                getFieldDecorator('userName',{
                  initialValue:'',
                  rules:[
                    {
                      required:true,
                      message:'用户名不为空！'
                    },
                    {min:5,max:10,message:'长度不在范围内'},
                    {pattern:new RegExp('^\\w+$','g'),message:'用户名必须为英文字母或者数字'}
                  ]
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名'/>
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('userPwd',{
                  initialValue:'',
                  rules:[]
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='请输入密码'/>
                )
              }
              
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a className="login-form-forgot" href="" style={{float:'right'}}>忘记密码</a>
              <Button type="primary" block onClick={this.handleSubmit}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormLogin);