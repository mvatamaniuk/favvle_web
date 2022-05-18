import { FC } from 'react'
import { Box } from '@mui/system'
import { useLocation } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'

import { SocialButton } from '../ui/social-button/social.button'

export const SocialAuth: FC = () => {
  // Current location URL

  const location = useLocation()

  // Define if 'Sign In page
  const isSignIn = location.pathname === '/auth/signin'

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        my: 5,
      }}
    >
      <SocialButton
        startIcon={<GoogleIcon />}
        disableRipple
        sx={{ mb: 4 }}
        fullWidth
      >
        {/* Change the title of the buttons depending on the page
         */}
        {`${isSignIn ? 'Login' : 'Sign Up'} With Google`}
      </SocialButton>
      {/* Change the title of the buttons depending on the page
       */}
      <SocialButton startIcon={<FacebookIcon />} disableRipple fullWidth>
        {`${isSignIn ? 'Login' : 'Sign Up'} With Facebook`}
      </SocialButton>
    </Box>
  )
}
