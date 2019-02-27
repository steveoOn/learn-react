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
              ) : null}
              {isTodoOpen ? (
                <DropdownNotice right={'120px'}>
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
