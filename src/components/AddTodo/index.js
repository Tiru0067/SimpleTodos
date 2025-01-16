import {Component} from 'react'
import './index.css'

class AddTodo extends Component {
  state = {title: ''}

  onChangeTodo = title => {
    this.setState({title})
  }

  onSubmitTodo = e => {
    e.preventDefault()
    const {onAddTodo} = this.props
    const {title} = this.state
    onAddTodo(title)
    this.setState({title: ''})
  }

  render() {
    const {title} = this.state

    return (
      <form className="add-todo" onSubmit={this.onSubmitTodo}>
        <input
          type="text"
          className="add-todo__input"
          placeholder="Add your todo here..."
          value={title}
          onChange={e => this.onChangeTodo(e.target.value)}
        />
        <button className="add-todo__button" type="submit">
          Add
        </button>
      </form>
    )
  }
}
export default AddTodo
