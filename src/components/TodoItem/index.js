import {RiDeleteBinLine} from 'react-icons/ri'
import {useDispatch} from 'react-redux'
import {toggleTodo} from '../../reducers/todosSlice'
import './index.css'

const TodoItem = props => {
  const {todo} = props
  const dispatch = useDispatch()

  const handleToggleComplete = id => {
    dispatch(toggleTodo(id))
  }

  return (
    <li key={todo.uniqueNo} className="todo-item-container">
      <input
        type="checkbox"
        checked={todo.completed}
        className="task-checkbox"
        onChange={() => handleToggleComplete(todo.uniqueNo)}
      />
      <div className="task-content">
        <span className={todo.completed ? 'task-text-completed' : ''}>
          {todo.text}
        </span>
        <button className="delete-task-btn">
          <RiDeleteBinLine />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
