import React, { Component } from 'react'
import styled from 'styled-components'
import NoteCard from './NoteCard'

const Container = styled.div`
  padding: 0 0 14px 0;
  max-height: 500px;
  overflow: scroll;
`
const TodayContent = styled.div``
const EarlierContent = styled(TodayContent)``

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin: 14px;
`

const NoteContent = props => (
  <Container>
    <TodayContent>
      <Title>今天</Title>
      <NoteCard isNew={true} text="你的同事李晓明今天转正了！" />
      <NoteCard text="你的申请刚刚审核通过了！这里演示三行文字的效果，这里演示三行文字的效果，这里演示三行文字的效果" />
    </TodayContent>
    <EarlierContent>
      <Title>稍早</Title>
      <NoteCard isNew={true} />
      <NoteCard text="春节前的工资发放调整到年后，这里演示两行文字的效果" />
      <NoteCard text="春节前的工资发放调整到年后，这里演示两行文字的效果" />
      <NoteCard text="春节前的工资发放调整到年后，这里演示两行文字的效果" />
    </EarlierContent>
  </Container>
)

export default NoteContent
