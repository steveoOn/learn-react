import React from 'react'
//导入默认值（styled）和单独模块（css）
import styled from 'styled-components'
import TabGroup from './TabGroup'
import { Bell } from 'react-feather'
import TodoList from './TodoList'

const NavContainer = styled.div`
  display: fixed;
  width: 100%;
  height: 48px;
  position: relative;
  background: #53a600;
`
const Label = styled.div``

const StyledSvg = styled.button`
  padding: 0;
  width: 36px;
  height: 36px;
  border: none;
  outline: none;
  background: transparent;
  position: absolute;
  right: 120px;
  top: 6px;
`

class Header extends React.Component {
  render() {
    return (
      <NavContainer>
        <TabGroup>
          <Label label="tab1">
            <TodoList />
          </Label>
          <Label label="tab2" paddingLR="46px">
            hi louie
          </Label>
          <Label label="tab3">oh no</Label>
          <Label label="tab4">oh yes</Label>
        </TabGroup>
        <StyledSvg>
          <Bell color="white" />
        </StyledSvg>
      </NavContainer>
    )
  }
}

export default Header
