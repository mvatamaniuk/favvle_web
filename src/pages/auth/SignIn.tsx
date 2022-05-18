import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'

import { SignInForm } from '../../components/auth/forms/sign-in.form'
import { SocialAuth } from '../../components/auth/social.auth'
import { LinkStyled } from '../../components/ui/link/link.styled'

import { selectAuth } from '../../redux/auth/auth.selectors'

import { useAppSelector } from '../../hooks/redux/useRexux'

export const SignIn: FC = () => {
  // select auth values
  const { error } = useAppSelector(selectAuth)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 15,
        width: 400,
        height: 700,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography variant='h1' sx={{ my: 4 }}>
          Login
        </Typography>
        <Typography variant='subtitle1'>Welcome Back</Typography>
      </Box>

      <SocialAuth />

      <Typography variant='subtitle1' sx={{ fontSize: 12 }}>
        or
      </Typography>

      <Box sx={{ width: '100%', mb: 5 }}>
        <SignInForm />

        {error && (
          <Typography color='red' fontSize='12px' textAlign='center'>
            {error}
          </Typography>
        )}

        <Box sx={{ textAlign: 'right' }}>
          <LinkStyled to={''}>Forgot password?</LinkStyled>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          type='submit'
          variant='contained'
          form='signin-form'
          sx={{ mb: 4 }}
        >
          Login
        </Button>

        <LinkStyled to='/auth/signup'>Don't have an account yet?</LinkStyled>
      </Box>
    </Box>
  )
}
