import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

export const taskSlice = createSlice({
  name: 'todo',
  initialState: {
    list: []
  },
  reducers: {
    createTodo: (state, action) => {
      state.list = [
        ...state.list,
        {
          id: uuid(),
          text: "" + action.payload,
          checked_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    },
    changeTodo: (state, action) => {
      updateTask(state, action.payload.id, 'text', action.payload.text)
    },
    deleteTodo: (state, action) => {
      const i = state.list.findIndex(p => p.id === action.payload)
      if (i >= 0) {
        const list = state.list
        state.list = [
          ...list.slice(0, i),
          ...list.slice(i + 1),
        ]
      }
    },
    checkTodo: (state, action) => {
      updateTask(state, action.payload, 'checked_at', new Date());
    },
    uncheckTodo: (state, action) => {
      updateTask(state, action.payload, 'checked_at', null);
    }
  }
})

const updateTask = (state, id, field, value) => {
  const i = state.list.findIndex(p => p.id === id)
  if (i >= 0) {
    const list = state.list, payload = list[i]
    state.list = [
      ...list.slice(0, i),
      {
        ...payload,
        [field]: value,
        updated_at: new Date(),
      },
      ...list.slice(i + 1),
    ]
  }
}

// Action creators are generated for each case reducer function
export const { createTodo, changeTodo, deleteTodo, checkTodo, uncheckTodo } = taskSlice.actions

export default taskSlice.reducer
