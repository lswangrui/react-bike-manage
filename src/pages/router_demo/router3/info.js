import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div>
        这里是测试动态路由功能
        {this.props.match.params.mainId}
      </div>
    )
  }
}
