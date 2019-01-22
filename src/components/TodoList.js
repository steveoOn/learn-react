import React, { Component } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import _ from 'lodash'

//收集用户输入的信息需用 form 标签
const Form = styled.form`
  background: none;
  width: 1024px;
  height: auto;
  padding-top: 16px;
`

const InputContainer = styled.div`
  margin: 0 auto 22px auto;
  width: 488px;
  height: ${48 + 32}px;
  background: #f9f9f9;
  position: relative;
`

const Input = styled.input`
  width: ${453 - 26}px;
  height: 48px;
  background: white;
  border-radius: 4px;
  border: none;
  padding: 0 14px;
  color: #676e78;
  font-size: 14px;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.08);
  outline-color: #2d58dd;
  outline-width: 2px;
  position: absolute;
  top: 16px;
  left: 16px;

  &::placeholder {
    font-size: 14px;
    color: #c0c0c0;
  }
`

const Button = styled.input`
  background: #2d58dd;
  padding: 6px 10px;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 600;
  box-shadow: 0 2px 4px 0 rgba(45, 193, 221, 0.5);
  position: absolute;
  top: 26px;
  right: 26px;
  outline: none;
  transition: 0.8s cubic-bezier(0.2, 0.82, 0.2, 1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(45, 193, 221, 0.5);
    transform: translateY(-3px);
  }
`

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marked: false,
      count: 2,
      newList: '',
      lists: [
        { id: 0, text: '学习 HTML', done: false },
        { id: 1, text: '学习 CSS', done: false },
        { id: 2, text: '学习 JavaScript', done: false },
      ],
      doneList: [],
    }
  }

  onSubmit = event => {
    //使用 preventDefault 方法防止 form 标签默认的 submit 提交后的刷新事件
    event.preventDefault()
    if (this.state.newList !== '') {
      this.setState({
        lists: [
          ...this.state.lists,
          {
            id: (this.state.count += 1),
            text: this.state.newList,
            done: this.state.marked,
          },
        ],
        newList: '',
      })
    }
  }

  getInputValue = event => {
    this.setState({
      newList: event.target.value,
    })
  }

  checkedChange = (index, isDone) => {
    //克隆 state 中的 list
    let list = _.cloneDeep(this.state.lists)
    //获取子组件 index（知道是哪个 list），同时获取子组件 CheckBox 的 checked 值（isDone），判断并设置 lists[index].done 的值
    if (isDone) {
      list[index].done = true
      this.setState({
        doneList: list.filter(li => li.done == true),
        lists: list.filter(li => li.done == false),
      })
    } else {
      list[index].done = false
      // this.setState({
      //   doneList: list.filter(li => li.done == false),
      //   lists: list.filter(li => li.done == true),
      // })
    }
    //完成后重设 state 中的 lists
  }

  removeTodo = id => {
    this.setState({
      lists: this.state.lists.filter(li => li.id !== id),
    })
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <InputContainer>
          <Input
            //获取 input 的值并显示在 input 中
            value={this.state.newList}
            onChange={this.getInputValue}
            placeholder="把要做的事情写下来"
          />
          <Button type="submit" value="add" />
        </InputContainer>
        <TodoItem
          lists={this.state.lists}
          checkedChange={this.checkedChange}
          remove={this.removeTodo}
        />
        <TodoItem
          lists={this.state.doneList}
          checkedChange={this.checkedChange}
          remove={this.removeTodo}
        />
      </Form>
    )
  }
}

export default Todo
