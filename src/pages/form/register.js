import React, { Component } from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,InputNumber, TimePicker, Upload, Icon,message} from 'antd';
import moment from 'moment';
const { Option } = Select;

class Register extends Component {
  state = {
    imageUrl:''
  }
  handleSubmit=()=>{
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err,value)=>{
      if(!err){
        message.success(`${userInfo.userName} - ${userInfo.userPwd}`)
      }
    })
  }
  getBase64=(img, callback)=>{
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg:imageUrl,
        loading: false,
      }));
    }
  }
  render () {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol:{
        xs:24,
        sm:4
      },
      wrapperCol:{
        xs:24,
        sm:12
      }
    }
    const offsetLayout = {
      wrapperCol:{
        xs:24,
        sm:{
          span:12,
          offset:4
        }
      }
    }
    return (
      <div>
        <Card title='注册表单' className='cardTitle'>
          <Form>
            <Form.Item label='用户名' {...formItemLayout}>
              {
                getFieldDecorator('userName',{
                  initialValue:'',
                  rules:[
                    {
                      required:true,
                      message:'用户名不为空！'
                    }
                  ]
                })(
                  <Input placeholder='请输入用户名'/>
                )
              }
            </Form.Item>
            <Form.Item label='密码' {...formItemLayout}>
              {
                getFieldDecorator('userPwd',{
                  initialValue:'',
                  rules:[
                    {
                      required:true,
                      message:'密码不为空！'
                    }
                  ]
                })(
                  <Input type='password' placeholder='请输入密码'/>
                )
              }
            </Form.Item>
            <Form.Item label='性别' {...formItemLayout}>
              {
                getFieldDecorator('sex',{
                  initialValue:'1',
                })(
                  <Radio.Group>
                    <Radio value='1'>男</Radio>
                    <Radio value='2'>女</Radio>
                  </Radio.Group>
                )
              }
            </Form.Item>
            <Form.Item label='年龄' {...formItemLayout}>
              {
                getFieldDecorator('age',{
                  initialValue:18,
                })(
                  <InputNumber></InputNumber>
                )
              }
            </Form.Item>
            <Form.Item label='当前状态' {...formItemLayout}>
              {
                getFieldDecorator('astatege',{
                  initialValue:'2',
                })(
                  <Select>
                    <Option value='1'>react</Option>
                    <Option value='2'>vue</Option>
                    <Option value='3'>angular</Option>
                    <Option value='4'>jquery</Option>
                  </Select>
                )
              }
            </Form.Item>
            <Form.Item
              label="爱好"
              {...formItemLayout}
            >
              {getFieldDecorator('interest', {
                initialValue:['2'],
                rules: [
                  { required: true, message: '请选择你的爱好', type: 'array' },
                ],
              })(
                <Select mode="multiple" placeholder="请选择你的爱好">
                  <Option value="1">游泳</Option>
                  <Option value="2">打篮球</Option>
                  <Option value="3">踢足球</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item
              label="是否已婚"
              {...formItemLayout}
            >
              {getFieldDecorator('switch', { valuePropName: 'checked',initialValue:true })(
                <Switch />
              )}
            </Form.Item>
            <Form.Item
              label="生日"
              {...formItemLayout}
            >
              {getFieldDecorator('brithday', {initialValue:moment('1993-10-10 12:00:59') })(
                <DatePicker showTime placeholder='选择日期' format='YYYY-MM-DD HH:mm:ss'/>
              )}
            </Form.Item>
            <Form.Item
              label="联系地址"
              {...formItemLayout}
            >
              {getFieldDecorator('address', {initialValue:'将风速怕看到群里看到' })(
                <Input.TextArea placeholder='选择日期' autosize={{minRows:2,maxRows:5}}/>
              )}
            </Form.Item>
            <Form.Item
              label="早起时间"
              {...formItemLayout}
            >
              {getFieldDecorator('time', {initialValue:moment('1993-10-10 12:00:59') })(
                <TimePicker placeholder='选择时间'/>
              )}
            </Form.Item>
            <Form.Item
              label="头像"
              {...formItemLayout}
            >
              {getFieldDecorator('userImg', {initialValue:moment('1993-10-10 12:00:59') })(
                <Upload 
                showUploadList={false}
                onChange={this.handleChange}
                action='//jsonplaceholder.typicode.com/posts/'
                listType='picture-card'>
                {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" /> : <Icon type='plus'></Icon>}
                </Upload>
              )}
            </Form.Item>
            
            <Form.Item
              {...offsetLayout}
            >
              {getFieldDecorator('userImg')(
               <Checkbox>我已起飞<a>随时升舱</a></Checkbox>
              )}
            </Form.Item>
            <Form.Item
              {...offsetLayout}
            >
              <Button type='primary' onClick={this.handleSubmit}>注册</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Register);