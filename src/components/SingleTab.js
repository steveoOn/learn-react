import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

//改变 Tab 选中色的思路：1）css 属性中引入 props.actived 类型为布尔值，如果 actived=true 则背景色变白，否则为默认色
//2）其次需要在 TabLi 中判断 props.activeTab 是否等于 props.label，如果等于，则 actived 为 true

const TabLi = styled.li`
  display: inline-block;
  list-style: none;
  margin: 0 1px;
  background: ${props => (props.actived ? 'white' : '#7dce16')};
  color: ${props => (props.actived ? '#333' : 'white')};
  font-size: 14px;
  font-weight: 400;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  text-align: center;
  padding: 8px ${props => props.paddingLR || '20px'};

  &:hover {
    cursor: pointer;
    background: ${props => (props.actived ? 'white' : '#86DA1C')};
  }
`

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  //点击单个 tab 时，选中当前 tab
  onClick = () => {
    this.props.onClick(this.props.label)
    console.log('tab:', this.props.label)
  }

  render() {
    return (
      <TabLi
        onClick={this.onClick}
        bgColor={this.props.bgColor}
        paddingLR={this.props.paddingLR}
        //利用 activeTab state 的状态做条件判断
        actived={this.props.activeTab === this.props.label ? true : false}
      >
        {this.props.label}
      </TabLi>
    )
  }
}

export default Tab
