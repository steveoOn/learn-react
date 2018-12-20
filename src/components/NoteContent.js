import React, { Component } from 'react'
import styled from 'styled-components'
import { Bell } from 'react-feather'

const Container = styled.div`
  padding: 0 0 14px 0;
`
const TodayContent = styled.div``
const EarlierContent = styled.div``

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin: 14px;
`
const CardContainer = styled.div`
  width: 348px;
  height: auto;
  background: rgba(249, 249, 249, 1);
  border-radius: 3px;
  margin: 0 auto;
`
const TopBar = styled.div`
  width: ${348 - 16}px;
  height: 30px;
  background: rgba(244, 244, 244, 1);
  border-radius: 3px 3px 0px 0px;
  display: grid;
  grid-template-columns: 200px auto;
  padding: 0 8px;
`
const Left = styled.div`
  display: grid;
  height: 30px;
  grid-template-columns: 14px 24px 20px;
  grid-column-gap: 8px;
  align-items: center;
  justify-items: center;
`
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
  width: 20px;
  height: 12px;
  background: rgba(236, 55, 77, 1);
  border-radius: 8px;
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

const TextContent = styled.p`
  width: 320px;
  height: auto;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 22px;
  margin: 0 auto;
  padding: 14px 0;
`

const NoteContent = props => (
  <Container>
    <TodayContent>
      <Title>今天</Title>
      <CardContainer>
        <TopBar>
          <Left>
            <IconNote>
              <Bell color="#999" size={14} />
            </IconNote>
            <BarTitle>通知</BarTitle>
            <Badge />
          </Left>
          <Right>
            <Date>2018-01-01</Date>
            <Time>12:00:59</Time>
          </Right>
        </TopBar>
        <TextContent>
          马上到期了！内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式
        </TextContent>
      </CardContainer>
    </TodayContent>
    <EarlierContent>
      <Title>稍早</Title>
      <CardContainer>
        <TopBar>
          <Left>
            <IconNote>
              <Bell color="#999" size={14} />
            </IconNote>
            <BarTitle>通知</BarTitle>
            <Badge />
          </Left>
          <Right>
            <Date>2018-01-01</Date>
            <Time>19:23:33</Time>
          </Right>
        </TopBar>
        <TextContent>你的同事李晓明刚刚转正了</TextContent>
      </CardContainer>
    </EarlierContent>
  </Container>
)

export default NoteContent
