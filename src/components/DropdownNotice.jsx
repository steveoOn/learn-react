import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NoticeContainer = styled.div`
  width: 376px;
  height: auto;
  border-radius: 3px;
  border: 1px solid rgba(224, 224, 224, 1);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: ${props => props.right || '20px'};
  margin-top: 8px;
  background: white;
`

const DropdownNotice = props => {
  return <NoticeContainer right={props.right}>{props.children}</NoticeContainer>
}

DropdownNotice.propTypes = {
  children: PropTypes.node,
}

export default DropdownNotice
