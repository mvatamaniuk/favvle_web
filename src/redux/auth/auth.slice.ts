import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FirebaseUser } from '../../types/auth/FirebaseUser'
import { logout, signInWithEmail, signUpWithEmail } from './auth.thunks'
import { initialState } from './auth.types'

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FirebaseUser>) => {
      state.user = action.payload
    },
    cleanError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInWithEmail.fulfilled, (state) => {
      state.error = null
    })
    builder.addCase(signInWithEmail.rejected, (state, action) => {
      const { payload } = action
      state.error = payload!
    })

    builder.addCase(signUpWithEmail.fulfilled, (state) => {
      state.error = null
    })
    builder.addCase(signUpWithEmail.rejected, (state, action) => {
      const { payload } = action
      state.error = payload!
    })

    builder.addCase(logout.fulfilled, () => {})
    builder.addCase(logout.rejected, () => {})
  },
})

export const { setUser, cleanError } = authSlice.actions

export default authSlice.reducer
