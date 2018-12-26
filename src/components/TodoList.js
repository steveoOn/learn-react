import React, { Component } from 'react'
import styled from 'styled-components'

//收集用户输入的信息需用 form 标签
const Container = styled.form`
  background: none;
  width: 1024px;
  height: auto;
  padding-top: 16px;
`

const Input = styled.input`
  width: ${453 - 28}px;
  height: 48px;
  background: white;
  border-radius: 4px;
  margin: 0 16px 22px 16px;
  border: none;
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

const TodoContent = styled.ol`
  width: 488px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 16px 0;
  list-style: none;
  position: relative;
`
const List = styled.li`
  background: #ffffff;
  width: ${453 - 28}px;
  height: ${48 - 28}px;
  border-radius: 4px;
  margin: 10px auto;
  padding: 14px;
  font-size: 14px;
  color: #676e78;
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
  right: 32px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [
        { id: 1, text: 'list1' },
        { id: 2, text: 'list2' },
        { id: 3, text: 'list3' },
      ],
      count: 3,
      hasValue: false,
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
          { id: (this.state.count += 1), text: newList },
        ],
      })

      console.log('value:', newList)
    }

    //清空 input 的值
    this.inputValue.reset()
  }

  render() {
    const { lists } = this.state
    console.log('state:', lists)
    return (
      <Container
        //使用 preventDefault 方法防止 form 标签默认的 submit 提交后的刷新事件
        onSubmit={this.preventFormRefresh}
        //得到 form 中的 input 值
        ref={input => {
          this.inputValue = input
        }}
      >
        <TodoContent>
          <Input
            //获取 input 的值
            ref={input => {
              this.newList = input
            }}
            placeholder="把要做的事情写下来"
            hasValue={this.state.hasValue}
          />
          <Button type="submit" onClick={this.addList} value="add" />
          {lists.map(list => {
            return <List key={list.id}>{list.text}</List>
          })}
        </TodoContent>
      </Container>
    )
  }
}

export default TodoList
