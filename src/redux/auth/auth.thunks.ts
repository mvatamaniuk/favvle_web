import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  AuthErrorCodes,
  UserCredential,
} from 'firebase/auth'

import { auth } from '../../configs/firebase/firebase.config'
import { EMAIL_IN_USE, USER_NOT_FOUND } from '../../constants/auth.errors'
import { IAuthActionPayload } from './auth.types'

// Sign in existing users
export const signInWithEmail = createAsyncThunk<
  UserCredential,
  IAuthActionPayload,
  { rejectValue: string }
>('auth/firebase/email/sign-in', async (payload, { rejectWithValue }) => {
  const { email, password } = payload

  try {
    // Asynchronously signs in using an email and password
    // Signed in
    const user = await signInWithEmailAndPassword(auth, email, password)

    console.log('SIGN_IN_SUCCESS', user)

    return user
  } catch (error) {
    if (error instanceof Error) {
      // Get an error if the email does not exist
      if (error.message.includes(AuthErrorCodes.USER_DELETED)) {
        return rejectWithValue(USER_NOT_FOUND)
      }
    }
    throw error
  }
})

//Sign up new users
export const signUpWithEmail = createAsyncThunk<
  UserCredential,
  IAuthActionPayload,
  { rejectValue: string }
>('auth/firebase/email/sign-up', async (payload, { rejectWithValue }) => {
  const { email, password } = payload

  try {
    // Creates a new user account associated with the specified email address and password.
    const user = await createUserWithEmailAndPassword(auth, email, password)

    console.log('SIGN_UP_SUCCESS', user)

    return user
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes(AuthErrorCodes.EMAIL_EXISTS)) {
        return rejectWithValue(EMAIL_IN_USE)
      }
    }
    throw error
  }
})

export const logout = createAsyncThunk('auth/firebase/email', async () => {
  try {
    await signOut(auth)
    // Sign-out successful
  } catch (error) {}
})
