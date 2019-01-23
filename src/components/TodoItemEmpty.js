import React from 'react'
import styled from 'styled-components'

const List = styled.li`
  background: #ffffff;
  width: ${453 - 28}px;
  min-height: ${56 - 28}px;
  border-radius: 4px;
  margin: 10px auto;
  padding: 14px;
  font-size: 14px;
  display: grid;
  grid-template-columns: auto 40px;
  align-items: center;
  color: #bbb;
`

const TodoOl = styled.ol`
  width: 488px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 8px 0;
  list-style: none;
`

const EmptyContent = props => {
  return (
    <TodoOl>
      <List>{props.emptyText}</List>
    </TodoOl>
  )
}

export default EmptyContent
