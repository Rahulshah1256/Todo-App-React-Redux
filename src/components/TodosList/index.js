import TodoItem from '../TodoItem'
import {useSelector} from 'react-redux'

import './index.css'

const todosList = [
  {
    text: 'Learn HTML',
    uniqueNo: 1,
    completed: false,
  },
  {
    text: 'Learn CSS',
    uniqueNo: 2,
    completed: false,
  },
  {
    text: 'Learn JavaScript',
    uniqueNo: 3,
    completed: false,
  },
]

const TodosList = () => {
  const todosList = useSelector(state => state.todos.todosList)

  const currentFilter = useSelector(state => state.filters.filter)

  const getFilteredTodos = () => {
    switch (currentFilter) {
      case 'Active':
        return todosList.filter(todo => !todo.completed)
      case 'Completed':
        return todosList.filter(todo => todo.completed)
      default:
        return todosList
    }
  }

  const filteredTodos = getFilteredTodos();

  return (
    <ul className="todo-items-container">
      {filteredTodos.map(todo => (
        <TodoItem todo={todo} key={todo.uniqueNo} />
      ))}
    </ul>
  )
}

export default TodosList
