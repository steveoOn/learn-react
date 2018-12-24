import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NoteCard from './NoteCard'

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
      <EarlyContent>
        <Title>稍早</Title>
        {React.Children.toArray(this.props.children).map(child => {
          const { isNew, text, isNote, barTitle } = child.props
          return (
            <NoteCard
              isNew={isNew}
              text={text}
              key={text}
              isNote={isNote}
              barTitle={barTitle}
            />
          )
        })}
      </EarlyContent>
    )
  }
}

export default EarlyNoteContent
