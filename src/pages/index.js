import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

import SEO from '../components/seo'
import DropdownNotice from '../components/DropdownNotice'
import TabGroup from '../components/TabGroup'
import TodayNoteContent from '../components/TodayNoteContent'
import EarlyNoteContent from '../components/EarlyNoteContent'
import NoContent from '../components/NoContent'
import { Notification, Todo } from './static/Notification'

const Label = styled.div``

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div>
      <DropdownNotice>
        <TabGroup isNote center>
          <Label label="通知" secondary>
            <TodayNoteContent>
              {Notification.today.contents.map(content => (
                <div
                  isNew
                  isNote
                  text={content.text}
                  key={content.text}
                  date={content.date}
                  time={content.time}
                />
              ))}
            </TodayNoteContent>
            <EarlyNoteContent>
              {Notification.early.contents.map(content => (
                <div
                  isNote
                  text={content.text}
                  key={content.text}
                  date={content.date}
                  time={content.time}
                />
              ))}
            </EarlyNoteContent>
            <NoContent text="没有更多通知了" />
          </Label>
          <Label label="消息" secondary>
            暂无任何消息
          </Label>
        </TabGroup>
      </DropdownNotice>
      <DropdownNotice right={'420px'}>
        <TodayNoteContent>
          {Todo.today.contents.map(content => (
            <div
              key={content.text}
              text={content.text}
              barTitle={content.barTitle}
            />
          ))}
        </TodayNoteContent>
        <EarlyNoteContent>
          {Todo.early.contents.map(content => (
            <div
              key={content.text}
              text={content.text}
              barTitle={content.barTitle}
            />
          ))}
        </EarlyNoteContent>
        <NoContent text="没有更多通待办了" />
      </DropdownNotice>
    </div>
  </Layout>
)

export default IndexPage
