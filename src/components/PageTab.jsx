import React from 'react'
import styled from 'styled-components'
import isActiveLink from './ActiveLink'

///// Style /////
const PageTabLi = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`
const StyleLink = styled(isActiveLink)`
  text-decoration: none;
  border-radius: 2px;
  margin-right: 8px;
  padding: 12px;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;

  &.active {
    background: #7dce16;

    &:hover {
      background: #82d416;
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

///// Component /////
const PageTab = props => {
  return (
    <PageTabLi>
      <StyleLink to={`/${props.router}/`}>{props.text}</StyleLink>
    </PageTabLi>
  )
}

export default PageTab
