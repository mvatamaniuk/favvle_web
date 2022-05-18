import { FC, FormEvent, useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { InputStyled } from '../../ui/input/input.styled'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux/useRexux'

import { signUpWithEmail } from '../../../redux/auth/auth.thunks'
import { selectAuth } from '../../../redux/auth/auth.selectors'
import { cleanError } from '../../../redux/auth/auth.slice'

export const SignUpForm: FC = () => {
  // Email input value
  const [email, setEmail] = useState('')
  // Password input value
  const [password, setPassword] = useState('')
  // Confirm password input value
  const [confirmPassword, setConfirmPassword] = useState('')

  // Show password flag
  const [isShowPassword, setIsShowPassword] = useState(false)
  //Show confirm password flag
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

  const dispatch = useAppDispatch()
  const { error } = useAppSelector(selectAuth)

  // Form submit handler
  const onSubmit = async (event: FormEvent) => {
    // Prevent from submitting a form
    event.preventDefault()

    // Call SignUp method with email and password
    await dispatch(signUpWithEmail({ email, password }))
  }

  useEffect(() => {
    return () => {
      dispatch(cleanError())
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form
      onSubmit={onSubmit}
      id='signup-form'
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
        fullWidth
        placeholder='Email'
        type='email'
        sx={{ mb: 2 }}
        onChange={(event) => setEmail(event.target.value)}
        error={!!error}
      />
      <InputStyled
        fullWidth
        placeholder='Password'
        type={isShowPassword ? 'text' : 'password'}
        onChange={(event) => setPassword(event.target.value)}
        sx={{ mb: 2 }}
        error={!!error}
        endAdornment={
          <IconButton
            disableRipple
            onClick={() => setIsShowPassword(!isShowPassword)}
            sx={{ p: 0 }}
          >
            <VisibilityIcon
              color={isShowPassword ? 'warning' : 'inherit'}
              sx={{ fontSize: 15 }}
            />
          </IconButton>
        }
      />
      <InputStyled
        fullWidth
        placeholder='Confirm password'
        type={isShowConfirmPassword ? 'text' : 'password'}
        onChange={(event) => setConfirmPassword(event.target.value)}
        error={!!error}
        endAdornment={
          <IconButton
            disableRipple
            onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
            sx={{ p: 0 }}
          >
            <VisibilityIcon
              sx={{ fontSize: 15 }}
              color={isShowConfirmPassword ? 'warning' : 'inherit'}
            />
          </IconButton>
        }
      />
    </form>
  )
}
