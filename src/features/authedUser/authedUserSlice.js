import { createSlice } from '@reduxjs/toolkit'

export const authedUserSlice = createSlice({
  name: 'authedUser',
  initialState: {
    value: '',
  },
  reducers: {
    signIn: (state, user) => {
      state.value = user.payload
    },
    signOut: (state) => {
      state.value = ''
    },
  },
})

export const { signIn, signOut } = authedUserSlice.actions

export default authedUserSlice.reducer