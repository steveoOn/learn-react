import React from 'react'
import styled from 'styled-components'
import { Bell } from 'react-feather'
import { Link } from 'gatsby'

const NavContainer = styled.header`
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

const H = styled.h4`
  padding: 0 10px;
`
const SH = styled.h5`
  padding: 0 8px;
  background: ${props => (props.actived ? 'white' : '#7dce16')};
  height: 34px;
  margin: 14px 2px;
  display: flex;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`
const StyleLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = props => {
  return (
    <NavContainer>
      <H>
        <StyleLink to="/">{props.siteTitle}</StyleLink>
      </H>
      <SH>
        <StyleLink to="/page-2/">Page2</StyleLink>
      </SH>
      <SH>
        <StyleLink to="/page-3/">Page3</StyleLink>
      </SH>
      {/* */}
      <StyledSvg>
        <Bell color="white" />
      </StyledSvg>
    </NavContainer>
  )
}

export default Header
