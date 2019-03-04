import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'
import styled from 'styled-components'

import DropdownNotice from './DropdownNotice'
import TabGroup from './TabGroup'
import TodayNoteContent from './TodayNoteContent'
import EarlyNoteContent from './EarlyNoteContent'
import NoContent from './NoContent'
import { Notification, Todo } from '../pages/static/Notification'

const Label = styled.div``

const Layout = ({ children }) => {
  const [isNoteOpen, setIsNotOpen] = useState(false)
  const [isTodoOpen, setIsTodoOpen] = useState(false)
  const [isCheck, setIsCheck] = useState(false)

  const handleNote = () => {
    if (isNoteOpen) {
      setIsNotOpen(false)
    } else {
      setIsNotOpen(true)
      setIsTodoOpen(false)
    }
  }
  const handleTodo = () => {
    if (isTodoOpen) {
      setIsTodoOpen(false)
    } else {
      setIsTodoOpen(true)
      setIsNotOpen(false)
    }
  }

  const handleCheck = checkValue => {
    if (checkValue) {
      setIsCheck(true)
    } else {
      setIsCheck(false)
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        const eachTodayNote = Notification.today.contents.map(content => (
          <div
            isNew
            isNote={content.isNote}
            text={content.text}
            key={content.text}
            date={content.date}
            time={content.time}
            barTitle={content.barTitle}
          />
        ))

        const eachEarlyNote = Notification.early.contents.map(content => (
          <div
            isNote={content.isNote}
            text={content.text}
            key={content.text}
            date={content.date}
            time={content.time}
            barTitle={content.barTitle}
          />
        ))

        return (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              onNoteClick={handleNote}
              onTodoClick={handleTodo}
            />
            <div>
              {isNoteOpen ? (
                <DropdownNotice>
                  <TabGroup isNote center>
                    <Label label="通知" secondary>
                      <TodayNoteContent
                        onChecked={handleCheck}
                        passCheckedValue={isCheck}
                      >
                        {isCheck
                          ? eachTodayNote.filter(n => n.props.isNote === false)
                          : eachTodayNote}
                      </TodayNoteContent>
                      <EarlyNoteContent>
                        {isCheck
                          ? eachEarlyNote.filter(n => n.props.isNote === false)
                          : eachEarlyNote}
                      </EarlyNoteContent>
                      <NoContent text="没有更多通知了" />
                    </Label>
                    <Label label="消息" secondary>
                      暂无任何消息
                    </Label>
                  </TabGroup>
                </DropdownNotice>
              ) : null}
              {isTodoOpen ? (
                <DropdownNotice right={'120px'}>
                  <TodayNoteContent>
                    {Todo.today.contents.map(content => (
                      <div
                        key={content.text}
                        text={content.text}
                        barTitle={content.barTitle}
                        isTodo
                        isNote
                      />
                    ))}
                  </TodayNoteContent>
                  <EarlyNoteContent>
                    {Todo.early.contents.map(content => (
                      <div
                        key={content.text}
                        text={content.text}
                        barTitle={content.barTitle}
                        isTodo
                        isNote
                      />
                    ))}
                  </EarlyNoteContent>
                  <NoContent text="没有更多通待办了" />
                </DropdownNotice>
              ) : null}
            </div>

            <div>{children}</div>
          </>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
