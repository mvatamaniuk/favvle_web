import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { FC } from 'react'

import { useAuth } from '../../../hooks/auth/useAuth'

// Show this component if successful sign up
export const SuccessSignUp: FC = () => {
  // AuthContext values
  const { logout } = useAuth()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 10,
        width: 400,
        height: 700,
      }}
    >
      <Box sx={{ my: 4 }}>
        <Typography variant='h1' textAlign='center'>
          Well done!
        </Typography>

        <Typography variant='h1' component='h2' textAlign='center'>
          You’ve created an account on Favvle!
        </Typography>
      </Box>

      <Box>
        <Button variant='contained' sx={{ width: 250 }} onClick={logout}>
          Continue
        </Button>
      </Box>
    </Box>
  )
}
