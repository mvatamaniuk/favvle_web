import { IconButton } from '@mui/material'
import { FC, FormEvent, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { useAuth } from '../../../hooks/auth/useAuth'
import { InputStyled } from '../../ui/input/input.styled'

export const SignUpForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

  const { signUpWithEmail, error } = useAuth()

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await signUpWithEmail(email, password)
  }

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
          >
            <VisibilityIcon
              color={isShowPassword ? 'warning' : 'inherit'}
              fontSize='small'
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
          >
            <VisibilityIcon
              fontSize='small'
              color={isShowConfirmPassword ? 'warning' : 'inherit'}
            />
          </IconButton>
        }
      />
    </form>
  )
}
