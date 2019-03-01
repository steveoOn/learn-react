import React from 'react'
import styled from 'styled-components'
import { Bell, Inbox } from 'react-feather'
import PageTabGroup from './PageTabGroup'
import { Link } from 'gatsby'
import logo from '../images/GaiaDesign.svg'

const NavContainer = styled.header`
  display: flex;
  width: 100%;
  height: 55px;
  background-image: linear-gradient(
    -90deg,
    #60bd94 0%,
    #54a18b 56%,
    #355775 100%
  );
`
const StyleLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
`

const IconBtn = styled.button`
  padding-top: 4px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }
`

const LeftIconBtn = styled(IconBtn)`
  right: 180px;
`

const H = styled.h4`
  padding: 0 12px;
  margin: 18px 0;
  width: 140px;
`

const NavIconWrap = styled.div`
  display: grid;
  align-items: center;
  margin-right: 16px;
  grid-column-gap: 8px;
  grid-template-columns: auto auto;
`

const UserWrap = styled(NavIconWrap)``

const UserName = styled.span`
  color: white;
`

const RightWrap = styled.div`
  margin-right: 20px;
  display: flex;
`

const Header = props => {
  return (
    <NavContainer>
      <img
        style={{ width: '28px', alignSelf: 'center', marginLeft: '6px' }}
        src={logo}
        alt="logo"
      />
      <H>
        <StyleLink to="/">{props.siteTitle}</StyleLink>
      </H>
      <PageTabGroup>
        <div text="home" router="home" />
        <div text="frist" router="page-1" />
        <div text="second" router="page-2" />
      </PageTabGroup>
      <RightWrap>
        <NavIconWrap>
          <LeftIconBtn onClick={props.onTodoClick}>
            <Inbox color="white" size={20} />
          </LeftIconBtn>
          <IconBtn onClick={props.onNoteClick}>
            <Bell color="white" size={20} />
          </IconBtn>
        </NavIconWrap>
        <UserWrap>
          <img
            style={{ width: '34px', height: '34px' }}
            src={logo}
            alt="avatar"
          />
          <UserName>username</UserName>
        </UserWrap>
      </RightWrap>
    </NavContainer>
  )
}

export default Header
