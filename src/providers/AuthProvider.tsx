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
  // Firebase user
  const [user, setUser] = useState<User | null>(null)
  // Loader on app init
  const [isLoadingInitial, setIsLoadingInitial] = useState(true)
  // Loader on api calls
  const [isLoading, setIsLoading] = useState(false)
  // Error state
  const [error, setError] = useState<string | null>(null)

  //Sign up new users
  const signUpWithEmail = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      // Creates a new user account associated with the specified email address and password.
      const user = await createUserWithEmailAndPassword(auth, email, password)

      setError(null)

      console.log('SIGN_UP_SUCCESS', user)
    } catch (error) {
      if (error instanceof Error) {
        // Get an error if the email exist

        if (error.message.includes(AuthErrorCodes.EMAIL_EXISTS)) {
          setError(EMAIL_IN_USE)
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Sign in existing users
  const signInWithEmail = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Asynchronously signs in using an email and password
      // Signed in
      const user = await signInWithEmailAndPassword(auth, email, password)

      setError(null)

      console.log('SIGN_IN_SUCCESS', user)
    } catch (error) {
      if (error instanceof Error) {
        // Get an error if the email does not exist
        if (error.message.includes(AuthErrorCodes.USER_DELETED)) {
          setError(USER_NOT_FOUND)
        }
      }
    } finally {
      setIsLoading(false)
    }
  }
  // Sign out existing users
  const logout = async () => {
    setIsLoading(true)

    try {
      await signOut(auth)
      // Sign-out successful
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  // Set an authentication state observer and get user data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userState) => {
      // User is signed in
      setUser(userState)
      setIsLoadingInitial(false)
    })

    return unsubscribe
  }, [])

  // AuthProvider value
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
