import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  outline: none;
  color: ${props => props.textColor || '#5a7be0'};
  font-size: 12px;
  font-weight: 600;
  border: none;
  padding: 2px 4px;
  border-radius: 3px;
  transition: 0.8s cubic-bezier(0.2, 0.82, 0.2, 1);
  height: 21px;

  &:hover {
    background: #e5eafa;
    cursor: pointer;
  }
`

const FoldWrap = styled.div``

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
      <FoldWrap>
        <Button onClick={this.handleFold} textColor={this.props.textColor}>
          {isFolded ? '展开' : '折叠'}
        </Button>
        {showChildren}
      </FoldWrap>
    )
  }
}

export default Fold
