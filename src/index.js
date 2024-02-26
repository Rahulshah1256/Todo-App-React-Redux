import React from 'react'
import ReactDOM from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './reducers/todosSlice'
import filterReducer from './reducers/filterSlice'
import {Provider} from 'react-redux'
import App from './App'

import './App.css'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filterReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
