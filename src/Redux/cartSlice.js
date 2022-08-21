import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
        state.push(action.payload)
    },
    deleteItem: (state, action) => {
      state.filter(item => item.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer