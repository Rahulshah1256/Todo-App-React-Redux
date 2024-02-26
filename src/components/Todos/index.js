// import useState
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodos} from '../../reducers/todosSlice'
import {setFilter} from '../../reducers/filterSlice'

import TodosList from '../TodosList'
import './index.css'

const Todos = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const handleAddTask = () => {
    if (!input.trim()) return

    dispatch(addTodos(input))
    setInput('')
  }

  const handleFilterChange = filter => {
    dispatch(setFilter(filter))
  }

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todos</h1>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>

      <input
        type="text"
        className="todo-user-input"
        placeholder="Enter a new task"
        value={input}
        onChange={handleInputChange}
      />
      <button className="add-todo-button" onClick={handleAddTask}>
        Add
      </button>

      <div className="heading-filters">
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>
        {/* Buttons for displaying completed and active tasks */}
        <div>
          <button
            className="filter-button"
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
          <button
            className="filter-button"
            onClick={() => handleFilterChange('Active')}
          >
            Active
          </button>
          <button
            className="filter-button"
            onClick={() => handleFilterChange('Completed')}
          >
            Completed
          </button>
        </div>
      </div>

      <TodosList />
    </div>
  )
}

export default Todos
