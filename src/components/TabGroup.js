import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Tab from './SingleTab'

const TabBar = styled.div`
  background: transparent;
`

const TabList = styled.ol`
  padding: 0;
  margin: 15px 0 0 0;

  ${props =>
    props.center &&
    css`
      margin-left: 25%;
    `}
`

const TabContent = styled.div`
  max-height: ${props => (props.isNote ? '500px' : '100%')};
  overflow: scroll;
`

class TabGroup extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      activeTab: this.props.children[0].props.label,
    }
  }
  //当点击某个 Tab 的时候，存储新 Tab 的 state.activeTab
  handleClick = tab => {
    this.setState({
      activeTab: tab,
    })
    console.log('state:', this.state.activeTab)
  }

  render() {
    //导入 state 中的 keys
    return (
      <TabBar>
        <TabList center={this.props.center}>
          {/*React 的 children 只有一个元素时，并不是一个数组，因此可强制转换成数组后再 map */}
          {React.Children.toArray(this.props.children).map(child => {
            const { label, bgColor, paddingLR, secondary } = child.props
            return (
              <Tab
                activeTab={this.state.activeTab}
                key={label}
                label={label}
                bgColor={bgColor}
                secondary={secondary}
                paddingLR={paddingLR}
                onClick={this.handleClick}
              />
            )
          })}
        </TabList>
        <TabContent isNote={this.props.isNote}>
          {React.Children.toArray(this.props.children).map(child => {
            if (child.props.label !== this.state.activeTab) return undefined
            return child.props.children
          })}
        </TabContent>
      </TabBar>
    )
  }
}

export default TabGroup
