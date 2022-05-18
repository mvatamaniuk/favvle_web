import { FC, FormEvent, useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { InputStyled } from '../../ui/input/input.styled'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux/useRexux'

import { signInWithEmail } from '../../../redux/auth/auth.thunks'
import { selectAuth } from '../../../redux/auth/auth.selectors'
import { cleanError } from '../../../redux/auth/auth.slice'

export const SignInForm: FC = () => {
  // Email input value
  const [email, setEmail] = useState('')
  // Password input value
  const [password, setPassword] = useState('')

  //Show password flag
  const [isShowPassword, setIsShowPassword] = useState(false)

  // const { signInWithEmail, error } = useAuth()
  const dispatch = useAppDispatch()
  const { error } = useAppSelector(selectAuth)

  // Form submit handler
  const onSubmit = async (event: FormEvent) => {
    // Prevent from submitting a form
    event.preventDefault()

    // Call SignIn method with email and password
    const resultSignInWithEmailAction = await dispatch(
      signInWithEmail({ email, password })
    )

    // Call alert if sign in successfully
    if (signInWithEmail.fulfilled.match(resultSignInWithEmailAction)) {
      return alert('You`ve succesfully logged in')
    }
  }

  useEffect(() => {
    return () => {
      dispatch(cleanError())
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <form
        onSubmit={onSubmit}
        id='signin-form'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          margin: '20px 0',
          padding: '0 50px',
        }}
      >
        <InputStyled
          error={!!error}
          fullWidth
          placeholder='Email'
          type='email'
          sx={{ mb: 2 }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputStyled
          error={!!error}
          fullWidth
          placeholder='Password'
          type={isShowPassword ? 'text' : 'password'}
          onChange={(event) => setPassword(event.target.value)}
          endAdornment={
            <IconButton
              disableRipple
              onClick={() => setIsShowPassword(!isShowPassword)}
              sx={{ p: 0 }}
            >
              <VisibilityIcon
                sx={{ fontSize: 15 }}
                color={isShowPassword ? 'warning' : 'inherit'}
              />
            </IconButton>
          }
        />
      </form>
    </>
  )
}
