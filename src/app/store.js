import { configureStore } from '@reduxjs/toolkit'
import authedUserReducer from '../features/authedUser/authedUserSlice'

export default configureStore({
  reducer: {
    authedUser: authedUserReducer,
  },
})