import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
   items:[]
  },
  reducers: {
    addItemToCart : (state, action) =>{
        state.items.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItemToCart } = cartSlice.actions

export default cartSlice.reducer