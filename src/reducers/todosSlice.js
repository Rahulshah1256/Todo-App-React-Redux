import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

const initialState = {
  todosList: [
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
  ],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodoObj = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
      }
      state.todosList.push(newTodoObj)
    },

    toggleTodo: (state, action) => {
      const todo = state.todosList.find(
        todo => todo.uniqueNo === action.payload,
      )
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

export const {addTodos, toggleTodo} = todoSlice.actions

export default todoSlice.reducer
