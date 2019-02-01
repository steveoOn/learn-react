import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  color: red;
`

class Fold extends React.Component {
  render() {
    return (
      <div>
        <Div>hello</Div>
      </div>
    )
  }
}

export default Fold
