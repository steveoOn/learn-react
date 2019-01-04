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
  height: 48px;
  position: relative;
`

const Input = styled.input`
  width: 458px;
  height: 48px;
  background: white;
  border-radius: 4px;
  border: 1px solid #e0e2e7;
  padding: 0 14px;
  color: #676e78;
  font-size: 14px;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.08);
  outline-color: #2d58dd;
  outline-width: 2px;

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
  top: 10px;
  right: 10px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marked: false,
      lists: [
        { text: 'list1', done: false },
        { text: 'list2', done: true },
        { text: 'list3', done: false },
      ],
    }
  }

  preventFormRefresh = e => {
    e.preventDefault()
  }

  addList = e => {
    //把 input 的值赋给 newList
    const newList = this.newList.value
    //使用 state 中的 count 计算 ID，使其每次 +1
    if (newList !== '') {
      this.setState({
        lists: [
          ...this.state.lists,
          { text: newList, done: this.state.marked },
        ],
      })
    }
    //清空 input 的值
    this.inputValue.reset()
  }

  checkedChange = index => {
    //克隆 state 中的 list
    let list = _.cloneDeep(this.state.lists)
    //点击该 list 可获取 index（知道是哪个 list），使得 index.done 取反
    list[index].done = !list[index].done
    //完成后重设 state 中的 lists
    this.setState({ lists: list })
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
        <TodoItem lists={this.state.lists} checkedChange={this.checkedChange} />
      </Container>
    )
  }
}

export default TodoList
