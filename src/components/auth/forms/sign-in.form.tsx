import { IconButton } from '@mui/material'
import { FC, FormEvent, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { useAuth } from '../../../hooks/auth/useAuth'

import { InputStyled } from '../../ui/input/input.styled'

export const SignInForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isShowPassword, setIsShowPassword] = useState(false)

  const { signInWithEmail, error } = useAuth()

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await signInWithEmail(email, password)
  }

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
            >
              <VisibilityIcon
                color={isShowPassword ? 'warning' : 'inherit'}
                fontSize='small'
              />
            </IconButton>
          }
        />
      </form>
    </>
  )
}
