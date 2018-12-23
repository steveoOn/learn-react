import React, { Component } from 'react'
import styled from 'styled-components'
import TabGroup from './TabGroup'
import TodayNoteContent from './TodayNoteContent'
import EarlyNoteContent from './EarlyNoteContent'

const NoticeContainer = styled.div`
  width: 376px;
  height: auto;
  border-radius: 3px;
  border: 1px solid rgba(224, 224, 224, 1);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: 20px;
  margin-top: 8px;
`

const Label = styled.div``

class DropdownNotice extends Component {
  render() {
    return (
      <NoticeContainer>
        <TabGroup>
          <Label label="通知">
            <TodayNoteContent>
              <div isNew={true} text="hello siwen" key={this.props.text} />
              <div isNew={false} text="hello ren" key={this.props.text} />
              <div isNew={false} text="text content" key={this.props.text} />
            </TodayNoteContent>
            <EarlyNoteContent>
              <div isNew={true} text="early siwen" key={this.props.text} />
              <div isNew={true} text="early ren" key={this.props.text} />
            </EarlyNoteContent>
          </Label>
          <Label label="待办">暂无待办事项</Label>
          <Label label="公告">暂无公告</Label>
        </TabGroup>
      </NoticeContainer>
    )
  }
}

export default DropdownNotice
