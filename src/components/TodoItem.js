import React, { Component } from 'react'
import styled from 'styled-components'
import { Trash2 } from 'react-feather'

const Field = styled.fieldset`
  width: 488px;
  margin: 0 auto;
  padding: 0;
  border: none;
`

const FieldTitle = styled.legend`
  font-size: 18px;
  color: #bbb;
  font-weight: 600;
  padding: 10px 0;
`

const TodoOl = styled.ol`
  width: 488px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 8px 0;
  list-style: none;
`

const List = styled.li`
  background: #ffffff;
  width: ${453 - 28}px;
  min-height: ${56 - 28}px;
  border-radius: 4px;
  margin: 10px auto;
  padding: 14px;
  font-size: 14px;
  display: grid;
  grid-template-columns: auto 40px;
  align-items: center;
`

const Label = styled.label`
  color: ${props => (props.markDone ? '#bbb' : '#676e78')};
  text-decoration: ${props => (props.markDone ? 'line-through' : 'none')};
`

const CheckBox = styled.input`
  width: 14px;
  height: 14px;
`

const Span = styled.span`
  padding-left: 8px;
`

const ButtonDelete = styled.button`
  background: #f1304c;
  box-shadow: 0 2px 4px 0 rgba(241, 48, 76, 0.41);
  width: 40px;
  height: 28px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.8s cubic-bezier(0.2, 0.82, 0.2, 1);
  display: none;
  padding-top: 4px;
  outline: none;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px 0 rgba(241, 48, 76, 0.41);
  }

  ${List}:hover & {
    display: initial;
  }
`

class TodoItem extends Component {
  onClickDone = (index, isDone) => {
    //作为 props 传递的方法 checkedChange 获取 list 的 index
    this.props.checkedChange(index, isDone)
    // console.log('index:', index, 'this done:', isDone)
  }

  clickTodo = id => {
    this.props.remove(id)
  }

  render() {
    return (
      <Field>
        <FieldTitle>{this.props.title}</FieldTitle>
        <TodoOl>
          {this.props.lists.map((list, index) => {
            return (
              <List key={index}>
                <Label
                  //使单个 list 通过判断 markDone 的值改变其样式
                  markDone={list.done}
                >
                  <CheckBox
                    id="todo"
                    type="checkbox"
                    //通过点击事件获取当前点击 list 的 index 值, event.target.checked 获取当前 CheckBox 勾选状态
                    onChange={event =>
                      this.onClickDone(index, event.target.checked)
                    }
                    //通过 list.done 控制 checked 的值
                    checked={list.done}
                  />
                  <Span>{list.text}</Span>
                </Label>
                <ButtonDelete onClick={event => this.clickTodo(list.id)}>
                  <Trash2 size={15} />
                </ButtonDelete>
              </List>
            )
          })}
        </TodoOl>
      </Field>
    )
  }
}

export default TodoItem
