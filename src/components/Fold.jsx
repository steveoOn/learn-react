import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  outline: none;
`

class Fold extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)
    this.state = {
      isFolded: false,
    }
  }

  handleFold = event => {
    if (this.state.isFolded) {
      this.setState({
        isFolded: false,
      })
    } else {
      this.setState({
        isFolded: true,
      })
    }
  }

  render() {
    const { isFolded } = this.state
    const showChildren = isFolded ? undefined : this.props.children

    return (
      <div>
        <Button onClick={this.handleFold}>{isFolded ? '展开' : '折叠'}</Button>
        {showChildren}
      </div>
    )
  }
}

export default Fold
