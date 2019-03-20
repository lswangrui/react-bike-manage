import React, { Component } from 'react'
import {Card,Button,Tabs,message,Icon} from 'antd'
const TabPane = Tabs.TabPane
export default class Tab extends Component {
    newTabIndex=0
    handleCallback = (key) => {
      message.info(key)
    };
    onChange = (activeKey) => {
      this.setState({
          activeKey
      })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
        } else {
            activeKey = panes[0].key;
        }
        }
        this.setState({ panes, activeKey });
    }
    
    componentWillMount() {
        const panes = [
            {
                title:'Tab 1',
                content:'Tab 1',
                key:'1'
            },
            {
                title:'Tab 2',
                content:'Tab 2',
                key:'2'
            },
            {
                title:'Tab 3',
                content:'Tab 3',
                key:'3'
            },
        ]
        this.setState({
            panes,
            activeKey:panes[0].key
        })
    }
    
  render() {
    return (
      <div>
        <Card title='Tab页签' className='cardTitle'>
            <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
                <TabPane tab='tab1' key='1'>1</TabPane>
                <TabPane tab='tab2' disabled key='2'>2</TabPane>
                <TabPane tab='tab3' key='3'>3</TabPane>
            </Tabs>
        </Card>
        <Card title='Tab包含图标页签' className='cardTitle'>
            <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
                <TabPane tab={<span><Icon type='plus'/>tab1</span>} key='1'>1</TabPane>
                <TabPane tab={<span><Icon type='edit'/>tab2</span>} key='2'>2</TabPane>
                <TabPane tab={<span><Icon type='delete'/>tab3</span>} key='3'>3</TabPane>
            </Tabs>
        </Card>
        <Card title='Tab包含图标页签' className='cardTitle'>
            <Tabs 
            defaultActiveKey='1' 
            type='editable-card'
            activeKey={this.state.activeKey}
            onEdit={this.onEdit}
             onChange={this.onChange}>
                {
                    this.state.panes.map(panel=>{
                        return <TabPane tab={panel.title} key={panel.key}/>
                    })
                }
            </Tabs>
        </Card>
      </div>
    )
  }
}
