import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Bell, X, Volume1 } from 'react-feather'

const CardContainer = styled.li`
  width: 348px;
  height: auto;
  background: rgba(249, 249, 249, 1);
  border-radius: 3px;
  margin: 8px auto;
  list-style: none;
`

const TopBar = styled.div`
  width: ${348 - 16}px;
  height: 30px;
  background: rgba(244, 244, 244, 1);
  border-radius: 3px 3px 0px 0px;
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  padding: 0 8px;
  position: relative;
`

const TextContent = styled.p`
  width: 320px;
  height: auto;
  font-size: 14px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 22px;
  margin: 0 auto;
  padding: 14px 0;
`

const Left = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`

const Right = styled(Left)`
  justify-self: end;

  ${CardContainer}:hover & {
    display: none;
  }
`

const Date = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(187, 187, 187, 1);
  margin: 0;
  padding: 0 2px;
`
const Time = styled(Date)``

const IconNote = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
`
const CloseButton = styled.button`
  display: none;
  border-radius: 3px;
  outline: none;
  border: none;
  width: 20px;
  height: 20px;
  padding: 0;
  justify-self: flex-end;
  align-self: center;

  ${CardContainer}:hover & {
    display: initial;
    background: #fbfbfb;
  }
`

const BarTitle = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin: 0 4px;
`

const Badge = styled.div`
  width: 6px;
  height: 6px;
  background: ${props =>
    props.isNew ? 'rgba(236, 55, 77, 1)' : 'transparent'};
  border-radius: 3px;
  position: absolute;
  top: 0;
  right: 1px;
`

const Tag = styled.div`
  height: 16px;
  width: auto;
  border-radius: 3px;
  border: 1px solid #51a500;
  font-size: 10px;
  font-weight: 400;
  align-self: center;
  text-align: center;
  display: ${props => (props.isTodo ? 'initial' : 'none')};

  ${props =>
    props.normal &&
    css`
      color: #51a500;
      border: 1px solid #51a500;
      background: #e8f4dc;
    `};
`

const NoteCard = props => {
  return (
    <CardContainer id={props.id}>
      <TopBar>
        <Left>
          <IconNote>
            {props.isNote ? (
              <Bell color="#999" size={14} />
            ) : (
              <Volume1 color="#999" size={16} />
            )}
            <Badge isNew={props.isNew} />
          </IconNote>
          <BarTitle>{props.barTitle}</BarTitle>
          <Tag normal isTodo={props.isTodo}>
            待审批
          </Tag>
        </Left>
        <Right>
          <Date>{props.date}</Date>
          <Time>{props.time}</Time>
        </Right>
        <CloseButton>
          <X color="#999" size={14} />
        </CloseButton>
      </TopBar>
      <TextContent>{props.text}</TextContent>
    </CardContainer>
  )
}

NoteCard.propTypes = {
  text: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
  barTitle: PropTypes.string,
}

NoteCard.defaultProps = {
  text:
    '马上到期了！内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式',
  barTitle: '通知',
  isTodo: false,
}

export default NoteCard
