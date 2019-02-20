import React from 'react'
import styled from 'styled-components'
import isActiveLink from './ActiveLink'

///// Style /////
const PageTabLi = styled.li`
  list-style: none;
  display: flex;
  align-items: flex-end;
`
const StyleLink = styled(isActiveLink)`
  text-decoration: none;
  background: #7dce16;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-right: 2px;
  padding: 8px;
  color: white;

  &.active {
    background: white;
    color: #333;
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
