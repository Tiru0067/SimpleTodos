import './index.css'

const TodoItem = ({todo, onDeleteTodo}) => (
  <li className="todo-item">
    <p className="todo-title">{todo.title}</p>
    <button type="button" onClick={() => onDeleteTodo(todo.id)}>
      Delete
    </button>
  </li>
)

export default TodoItem
