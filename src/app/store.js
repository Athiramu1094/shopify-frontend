import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/features/login/loginSlice'
import cartReducer from '../features/features/cart/cartSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    cart:cartReducer
  }
})