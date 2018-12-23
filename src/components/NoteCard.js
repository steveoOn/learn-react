import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Bell } from 'react-feather'

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
  grid-template-columns: 0.3fr 0.2fr 1fr;
  padding: 0 8px;
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
  grid-template-columns: ${props =>
    props.isNew ? '0.1fr 0.8fr 0.1fr' : 'auto auto'};
  grid-column-gap: 8px;
  align-items: center;
`

const Right = styled(Left)`
  grid-template-columns: 68px 58px;
  justify-self: end;
`

const Date = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(187, 187, 187, 1);
  margin: 0;
`
const Time = styled(Date)``

const IconNote = styled.div`
  width: 14px;
  height: 14px;
  padding: 0;
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
  background: ${props => (props.isNew ? 'rgba(236, 55, 77, 1)' : 'blue')};
  border-radius: 3px;
`

const Tag = styled.div`
  height: 16px;
  width: auto;
  border-radius: 3px;
  border: 1px solid #51A500;
  font-size: 10px;
  font-weight: 400;
  align-self: center;
  text-align: center;

  ${props =>
    props.normal &&
    css`
      color: #51a500;
      border: 1px solid #51a500;
      background: #e8f4dc;
    `}
  ${props =>
    props.grey &&
    css`
      color: #bbbbbb;
      border: 1px solid #cccccc;
      background: #f4f4f4;
    `}
  ${props =>
    props.warring &&
    css`
      color: #f5a623;
      border: 1px solid #f5a623;
      background: #f9ecd8;
    `}
`

class NoteCard extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
  }
  render() {
    return (
      <CardContainer>
        <TopBar>
          <Left isNew={this.props.isNew}>
            <IconNote>
              <Bell color="#999" size={14} />
            </IconNote>
            <BarTitle>通知</BarTitle>
            <Badge isNew={this.props.isNew} />
          </Left>
          <Tag normal>待审批</Tag>
          <Right>
            <Date>2018-01-01</Date>
            <Time>12:00:59</Time>
          </Right>
        </TopBar>
        <TextContent>{this.props.text}</TextContent>
      </CardContainer>
    )
  }
}

NoteCard.defaultProps = {
  text:
    '马上到期了！内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式',
}

export default NoteCard
