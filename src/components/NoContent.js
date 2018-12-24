import React from 'react'
import styled from 'styled-components'

const TipText = styled.p`
  margin: 14px auto;
  font-size: 12px;
  color: #999;
  width: 100%;
  text-align: center;
`

const NoContent = props => <TipText>{props.text}</TipText>

export default NoContent
