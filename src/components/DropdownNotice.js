import React, { Component } from 'react'
import styled from 'styled-components'
import TabGroup from './TabGroup'
import TodayNoteContent from './TodayNoteContent'
import EarlyNoteContent from './EarlyNoteContent'
import NoContent from './NoContent'

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
        <TabGroup isNote center>
          <Label label="通知" secondary>
            <TodayNoteContent>
              <div
                isNew
                text="你的劳动合同 编号2018092625553 马上到期了！内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样"
                key={this.props.text}
                isNote={true}
              />
              <div
                isNew
                text="本月薪资已发放。两行文字效果，两行文字效果两行文字效果"
                key={this.props.text}
                isNote={true}
              />
              <div
                isNew={false}
                text="你的同事李晓明刚刚转正了！"
                key={this.props.text}
                isNote={true}
              />
            </TodayNoteContent>
            <EarlyNoteContent>
              <div
                isNew={false}
                text="这是一条稍早的消息，按时间排序"
                key={this.props.text}
                isNote={true}
              />
              <div
                isNew={false}
                text="这是一条稍早的消息"
                key={this.props.text}
                isNote={true}
              />
            </EarlyNoteContent>
            <NoContent text="没有更多通知了" />
          </Label>
          <Label label="待办" secondary>
            <TodayNoteContent>
              <div
                isNew
                text="OT-8547 表单需要你审批，点击表单号查看"
                key={this.props.text}
                barTitle="待办"
              />
              <div
                isNew={false}
                text="ED-283 表单需要你审批，点击表单号查看"
                key={this.props.text}
                barTitle="待办"
              />
            </TodayNoteContent>
            <EarlyNoteContent>
              <div
                isNew={true}
                text="Leave-583 表单需要你审批，点击表单号查看"
                key={this.props.text}
                barTitle="待办"
              />
            </EarlyNoteContent>
            <NoContent text="没有更多通待办了" />
          </Label>
          <Label label="公告" secondary>
            暂无公告
          </Label>
        </TabGroup>
      </NoticeContainer>
    )
  }
}

export default DropdownNotice
