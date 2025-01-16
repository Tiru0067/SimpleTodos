import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'
import AddTodo from '../AddTodo'

class SimpleTodos extends Component {
  state = {
    todoList: [
      {
        id: 1,
        title: 'Book the ticket for today evening',
        isChecked: false,
      },
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
        isChecked: false,
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
        isChecked: false,
      },
      {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
        isChecked: false,
      },
      {
        id: 5,
        title: 'Order fruits on Big Basket',
        isChecked: false,
      },
      {
        id: 6,
        title: 'Fix the production issue',
        isChecked: false,
      },
      {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
        isChecked: false,
      },
      {
        id: 8,
        title: 'Get essentials for Sunday car wash',
        isChecked: false,
      },
    ],
  }

  onDeleteTodo = id => {
    const {todoList} = this.state
    const filteredList = todoList.filter(todo => todo.id !== id)
    this.setState({todoList: filteredList})
  }

  onAddTodo = title => {
    const {todoList} = this.state
    const parts = title.trim().split(' ')

    // Check if the last part is a number
    const countStr = parts[parts.length - 1]
    const count = Number.isNaN(parseInt(countStr, 10))
      ? 1
      : parseInt(parts.pop(), 10)

    const newTitle = parts.join(' ') // Join the rest as the title

    const newTodos = []
    const lastId = todoList[todoList.length - 1]?.id + 1 || 0

    for (let i = 0; i < count; i += 1) {
      const id = lastId + i
      newTodos.push({
        id,
        title: newTitle,
        isChecked: false,
      })
    }

    this.setState(prevState => ({
      todoList: [...prevState.todoList, ...newTodos],
    }))
  }

  onUpdateTodo = (id, updatedData) => {
    const {todoList} = this.state
    const updatedTodoList = todoList.map(todo =>
      todo.id === id ? {...todo, ...updatedData} : todo,
    )
    this.setState({todoList: updatedTodoList})
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="App">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <AddTodo onAddTodo={this.onAddTodo} />
          <ul>
            {todoList.map(todo => (
              <TodoItem
                todo={todo}
                key={todo.id}
                onDeleteTodo={this.onDeleteTodo}
                onUpdateTodo={this.onUpdateTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
