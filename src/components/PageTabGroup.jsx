import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PageTab from './PageTab'

const OL = styled.ol`
  display: flex;
  margin: 0;
  padding: 0;
`

function childrenToArray(propChildren) {
  return React.Children.toArray(propChildren)
}

const PageTabGroup = props => {
  const jsxChildren = childrenToArray(props.children)

  return (
    <OL>
      {jsxChildren.map(child => {
        return (
          <PageTab
            key={child.props.text}
            text={child.props.text}
            router={child.props.router}
          />
        )
      })}
    </OL>
  )
}

PageTabGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTabGroup
