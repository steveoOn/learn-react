import React from 'react'
import styled from 'styled-components'

////// Style //////
const Wraper = styled.div`
  display: flex;
  align-items: center;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Label = styled.label`
  font-size: 14px;
  color: ${props => (props.checked ? 'white' : '#60BE94')};
  z-index: 1;
  cursor: pointer;
  background: ${props => (props.checked ? '#60BE94' : 'none')};
  padding: 2px 4px;
  border-radius: 2px;
  border: ${props => (props.checked ? 'none' : '1px solid #60BE94')};
  transition: all 150ms;
`

////// Components //////
const CheckableTag = ({ className, checked, ...props }) => {
  return (
    <Wraper className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <Label htmlFor={props.id} checked={checked}>
        {props.text}
      </Label>
    </Wraper>
  )
}

export default CheckableTag
