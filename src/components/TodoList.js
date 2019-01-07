import React, { Component } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import _ from 'lodash'

//收集用户输入的信息需用 form 标签
const Container = styled.form`
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
      lists: [
        { id: 0, text: '学习 HTML', done: false },
        { id: 1, text: '学习 CSS', done: false },
        { id: 2, text: '学习 JavaScript', done: false },
      ],
    }
  }

  preventFormRefresh = e => {
    e.preventDefault()
  }

  addList = e => {
    //把 input 的值赋给 newList
    const newList = this.newList.value
    if (newList !== '') {
      this.setState({
        lists: [
          ...this.state.lists,
          {
            id: (this.state.count += 1),
            text: newList,
            done: this.state.marked,
          },
        ],
      })
    }
    //清空 input 的值
    this.inputValue.reset()
  }

  checkedChange = index => {
    //克隆 state 中的 list
    let list = _.cloneDeep(this.state.lists)
    //从子组件 index（知道是哪个 list），使得 index.done 取反
    list[index].done = !list[index].done
    //完成后重设 state 中的 lists
    this.setState({ lists: list })
  }

  removeTodo = id => {
    this.setState({
      lists: this.state.lists.filter(li => li.id !== id),
    })
  }

  render() {
    return (
      <Container
        //使用 preventDefault 方法防止 form 标签默认的 submit 提交后的刷新事件
        onSubmit={this.preventFormRefresh}
        //得到 form 中的 input 值
        ref={input => {
          this.inputValue = input
        }}
      >
        <InputContainer>
          <Input
            //获取 input 的值
            ref={input => {
              this.newList = input
            }}
            placeholder="把要做的事情写下来"
          />
          <Button type="submit" onClick={this.addList} value="add" />
        </InputContainer>
        <TodoItem
          lists={this.state.lists}
          checkedChange={this.checkedChange}
          remove={this.removeTodo}
        />
      </Container>
    )
  }
}

export default Todo
