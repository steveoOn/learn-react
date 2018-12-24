import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Bell, X } from 'react-feather'

const CardContainer = styled.div`
  width: 348px;
  height: auto;
  background: rgba(249, 249, 249, 1);
  border-radius: 3px;
  margin: 8px auto;
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
  display: grid;
  height: 30px;
  grid-template-columns: 0.2fr 0.6fr 1fr;
  grid-column-gap: 8px;
  align-items: center;
`

const Right = styled(Left)`
  grid-template-columns: 68px 52px;
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
`
const Time = styled(Date)``

const IconNote = styled.button`
  width: 14px;
  height: 14px;
  padding: 0;
  position: relative;
  border: none;
  background: transparent;
  outline: none;
`
const IconClose = styled(IconNote)`
  position: absolute;
  top: ${(30 - 14) / 2}px;
  right: 8px;
  display: none;
  border-radius: 3px;

  ${CardContainer}:hover & {
    display: initial;
    background: #fbfbfb;
  }
`

const BarTitle = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin: 0;
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
  display: ${props => (props.isNote ? 'none' : 'initial')};

  ${props =>
    props.normal &&
    css`
      color: #51a500;
      border: 1px solid #51a500;
      background: #e8f4dc;
    `};
`

class NoteCard extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
    barTitle: PropTypes.string,
  }

  removeNoteCard = () => {
    console.log('remove:')
  }

  render() {
    return (
      <CardContainer>
        <TopBar>
          <Left>
            <IconNote>
              <Bell color="#999" size={14} />
              <Badge isNew={this.props.isNew} />
            </IconNote>
            <BarTitle>{this.props.barTitle}</BarTitle>
            <Tag normal isNote={this.props.isNote}>
              待审批
            </Tag>
          </Left>
          <Right>
            <Date>2018-01-01</Date>
            <Time>12:00:59</Time>
          </Right>
          <IconClose onClick={this.removeNoteCard}>
            <X color="#999" size={14} />
          </IconClose>
        </TopBar>
        <TextContent>{this.props.text}</TextContent>
      </CardContainer>
    )
  }
}

NoteCard.defaultProps = {
  text:
    '马上到期了！内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式',
  barTitle: '通知',
}

export default NoteCard
