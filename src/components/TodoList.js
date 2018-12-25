import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
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

const Button = styled.button`
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
`

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [
        { id: 1, text: 'list1' },
        { id: 2, text: 'list2' },
        { id: 3, text: 'list3' },
        { id: 4, text: 'list4' },
      ],
    }
  }

  render() {
    const { lists } = this.state
    console.log('state:', lists)
    return (
      <Container>
        <TodoContent>
          <Input placeholder="把要做的事情写下来" />
          <Button>add</Button>
          {lists.map(list => {
            return <List key={list.id}>{list.text}</List>
          })}
        </TodoContent>
      </Container>
    )
  }
}

export default TodoList
