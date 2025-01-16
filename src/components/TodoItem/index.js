import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {editMode: false, isChecked: false, title: ''}

  componentDidMount() {
    const {todo} = this.props
    this.setState({title: todo.title})
  }

  onChecked = () => {
    const {todo, onUpdateTodo} = this.props
    this.setState(
      prevState => ({isChecked: !prevState.isChecked}),
      () => {
        const {isChecked} = this.state
        onUpdateTodo(todo.id, {isChecked})
      },
    )
  }

  onEdit = () => {
    this.setState({editMode: true})
  }

  onChange = e => {
    this.setState({title: e.target.value})
  }

  onSave = () => {
    const {todo, onUpdateTodo} = this.props
    const {title} = this.state
    this.setState({editMode: false})
    onUpdateTodo(todo.id, {title})
  }

  render() {
    const {todo, onDeleteTodo} = this.props
    const {editMode, isChecked, title} = this.state

    return (
      <li className="todo-item">
        {editMode ? (
          <input
            type="text"
            className="add-todo__input"
            value={title}
            onChange={this.onChange}
          />
        ) : (
          <div className="todo-checkbox-wrapper">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={this.onChecked}
            />
            <p className={`todo-title ${isChecked && 'completed'}`}>
              {todo.title}
            </p>
          </div>
        )}
        <div className="buttons">
          {editMode ? (
            <button className="edit-button" type="button" onClick={this.onSave}>
              Save
            </button>
          ) : (
            <button className="edit-button" type="button" onClick={this.onEdit}>
              Edit
            </button>
          )}
          <button type="button" onClick={() => onDeleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
