import { FirebaseUser } from '../../types/auth/FirebaseUser'

interface AuthState {
  user: FirebaseUser
  isLoading: boolean
  error: string | null
}

export interface IAuthActionPayload {
  password: string
  email: string
}

export const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
}
