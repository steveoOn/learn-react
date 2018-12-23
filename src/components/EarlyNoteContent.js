import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NoteCard from './NoteCard'

const Container = styled.div`
  padding: 0 0 14px 0;
  max-height: 500px;
  overflow: scroll;
`
const EarlyContent = styled.div``

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin: 14px;
`

class EarlyNoteContent extends Component {
  static propTypes = {
    //子元素的类型可以是 React 组件或数组
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  }

  render() {
    return (
      <Container>
        <EarlyContent>
          <Title>稍早</Title>
          {React.Children.toArray(this.props.children).map(child => {
            const { isNew, text } = child.props
            return <NoteCard isNew={isNew} text={text} key={text} />
          })}
        </EarlyContent>
      </Container>
    )
  }
}

export default EarlyNoteContent
