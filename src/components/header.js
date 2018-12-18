import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
//导入默认值（styled）和单独模块（css）
import styled, { css } from 'styled-components'

const NavContainer = styled.div`
  display: fixed;
  width: 100%;
  height: 48px;
  position: relative;
  background: #53a600;
`

const TabBar = styled.div`
  width: auto;
  height: 36px;
  display: grid;
  grid-template-columns: repeat(3, 96px);
  grid-column-gap: 2px;
  position: absolute;
  bottom: 0;
`

const Tab = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  text-align: center;
  outline: none;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: none;
  font-weight: 500;

  ${props =>
    props.type == 'clicked' &&
    css`
      background: white;
      color: #333;
    `}

  ${props =>
    props.type == 'default' &&
    css`
      background: #7dce16;
      color: #fff;

      &:hover {
        background: black;
        cursor: pointer;
        background: #89dc20;
      }
    `}
`

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasClicked: false,
      tabs: [
        { id: 1, name: 'tab1' },
        { id: 2, name: 'tab2' },
        { id: 3, name: 'tab3' },
      ],
    }
  }

  handleClick = () => {
    this.setState(state => ({
      hasClicked: !state.hasClicked,
    }))
  }

  render() {
    //导入 state 中的 keys
    const { tabs, hasClicked } = this.state
    console.log(hasClicked)

    return (
      <NavContainer>
        <TabBar>
          {tabs.map(tab => (
            <Tab key={tab.id} type="default" onClick={this.handleClick}>
              {tab.name}
            </Tab>
          ))}
        </TabBar>
      </NavContainer>
    )
  }
}

export default Header
