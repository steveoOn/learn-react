import React, { Component } from 'react'
import styled from 'styled-components'

const TodoOl = styled.ol`
  width: 488px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 16px 0;
  list-style: none;
`

const List = styled.li`
  background: #ffffff;
  width: ${453 - 28}px;
  min-height: ${48 - 28}px;
  border-radius: 4px;
  margin: 10px auto;
  padding: 14px;
  font-size: 14px;
`

const Label = styled.label`
  color: ${props => (props.markDone ? 'blue' : '#676e78')};
`

const CheckBox = styled.input``

const Span = styled.span`
  padding-left: 8px;
`

class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  onClickDone = (index, isDone) => {
    this.props.checkedChange(index)
    console.log('index:', index, 'this done:', isDone)
  }

  render() {
    return (
      <TodoOl>
        {this.props.lists.map((list, index) => {
          return (
            <List key={index}>
              {/*如何获取当前点击的 label，参数 e 可获取 CheckBox 的 checked 值，list 参数获取档期点击的 label*/}
              <Label
                onClick={e => this.onClickDone(index, list.done)}
                markDone={list.done}
              >
                <CheckBox id="todo" type="checkbox" />
                <Span>{list.text}</Span>
              </Label>
            </List>
          )
        })}
      </TodoOl>
    )
  }
}

export default TodoItem
