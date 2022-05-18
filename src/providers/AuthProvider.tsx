import {
  createContext,
  ReactNode,
  FC,
  useMemo,
  useState,
  useEffect,
} from 'react'
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  AuthErrorCodes,
} from 'firebase/auth'

import { auth } from '../configs/firebase/firebase.config'
import { EMAIL_IN_USE, USER_NOT_FOUND } from '../constants/auth.errors'

interface IAuthContext {
  user: User | null
  isLoading: boolean
  error: string | null
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

interface IAuthContextProps {
  children: ReactNode
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: FC<IAuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoadingInitial, setIsLoadingInitial] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signUpWithEmail = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)

      setError(null)

      console.log('SIGN_UP_SUCCESS', user)
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes(AuthErrorCodes.EMAIL_EXISTS)) {
          setError(EMAIL_IN_USE)
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  const signInWithEmail = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)

      setError(null)

      console.log('SIGN_IN_SUCCESS', user)
    } catch (error) {
      if (error instanceof Error) {
        console.log('error', error)
        if (error.message.includes(AuthErrorCodes.USER_DELETED)) {
          setError(USER_NOT_FOUND)
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)

    try {
      await signOut(auth)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userState) => {
      setUser(userState)
      setIsLoadingInitial(false)
    })

    return unsubscribe
  }, [])

  const value = useMemo(
    () => ({
      user,
      isLoading,
      error,
      signInWithEmail,
      signUpWithEmail,
      logout,
    }),
    [user, isLoading, error]
  )

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  )
}
