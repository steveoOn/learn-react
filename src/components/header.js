import PropTypes from 'prop-types'
import React from 'react'
//导入默认值（styled）和单独模块（css）
import styled, { css } from 'styled-components'
import TabGroup from './TabGroup'

const NavContainer = styled.div`
  display: fixed;
  width: 100%;
  height: 48px;
  position: relative;
  background: #53a600;
`
const Label = styled.div``

class Header extends React.Component {
  render() {
    return (
      <NavContainer>
        <TabGroup>
          <Label label="tab1">hi siwen</Label>
          <Label label="tab2" paddingLR="46px">
            hi louie
          </Label>
          <Label label="tab3">oh no</Label>
        </TabGroup>
      </NavContainer>
    )
  }
}

export default Header
