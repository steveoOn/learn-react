import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NoteCard from './NoteCard'
import CheckableTag from './CheckableTag'

const TodayContent = styled.ol`
  padding: 0;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin: 14px;
`

const TodayNoteContent = props => {
  const onCheckedChange = value => {
    props.onChecked(value)
  }

  return (
    <TodayContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Title>今天</Title>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '80%',
          }}
        >
          <CheckableTag
            id="filter"
            name="filter"
            onChange={e => onCheckedChange(e.target.checked)}
            checked={props.passCheckedValue}
            text="公告"
          />
        </div>
      </div>
      {React.Children.toArray(props.children).map(child => {
        const {
          isNew,
          text,
          isNote,
          barTitle,
          date,
          time,
          isTodo,
        } = child.props
        return (
          <NoteCard
            isNew={isNew}
            text={text}
            key={text}
            isNote={isNote}
            isTodo={isTodo}
            barTitle={barTitle}
            date={date}
            time={time}
          />
        )
      })}
    </TodayContent>
  )
}

TodayNoteContent.propTypes = {
  //子元素的类型可以是 React 组件或数组
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default TodayNoteContent
