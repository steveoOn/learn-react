import React from 'react'
import styled from 'styled-components'
import { Bell } from 'react-feather'
import PageTabGroup from './PageTabGroup'
import { Link } from 'gatsby'

const NavContainer = styled.header`
  display: fixed;
  width: 100%;
  height: 48px;
  position: relative;
  background: #53a600;
`
const StyleLink = styled(Link)`
  color: white;
  text-decoration: none;
`

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

const Header = props => {
  return (
    <NavContainer>
      <H>
        <StyleLink to="/">{props.siteTitle}</StyleLink>
      </H>
      <PageTabGroup>
        <div text="page 2" router="page-2" />
        <div text="page 3" router="page-3" />
        <div text="page 4" router="page-4" />
      </PageTabGroup>
      <StyledSvg>
        <Bell color="white" />
      </StyledSvg>
    </NavContainer>
  )
}

export default Header
