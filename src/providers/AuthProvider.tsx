import {
  createContext,
  ReactNode,
  FC,
  useMemo,
  useState,
  useEffect,
} from 'react'

import { useAppDispatch } from '../hooks/redux/useRexux'

import { auth } from '../configs/firebase/firebase.config'
import { setUser } from '../redux/auth/auth.slice'

interface IAuthContext {
  // user?: User | null
  // isLoading?: boolean
  // error?: string | null
  // signInWithEmail?: (email: string, password: string) => Promise<void>
  // signUpWithEmail?: (email: string, password: string) => Promise<void>
  // logout?: () => Promise<void>
}

interface IAuthContextProps {
  children: ReactNode
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: FC<IAuthContextProps> = ({ children }) => {
  const [isLoadingInitial, setIsLoadingInitial] = useState(true)

  const dispatch = useAppDispatch()

  // Set an authentication state observer and get user data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userState) => {
      // User is signed in
      dispatch(setUser(userState))
      setIsLoadingInitial(false)
    })

    return unsubscribe
  }, [])

  // AuthProvider value
  const value = useMemo(() => ({}), [])

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  )
}
