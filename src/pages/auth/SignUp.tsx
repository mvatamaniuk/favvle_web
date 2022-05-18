import { FC, useState } from 'react'
import { Box, Button, PopperPlacementType, Typography } from '@mui/material'

import { SignUpForm } from '../../components/auth/forms/sign-up.form'
import { SocialAuth } from '../../components/auth/social.auth'
import { LinkStyled } from '../../components/ui/link/link.styled'
import { PopperStyled } from '../../components/ui/popper/popper.styled'

import { useAuth } from '../../hooks/auth/useAuth'
import { PopperContent } from '../../components/auth/sign-up/popper.content'
import { SuccessSignUp } from '../../components/auth/sign-up/succes.signup'

export const SignUp: FC = () => {
  // popper show state
  const [isPopperOpen, setIsPopperOpen] = useState(false)
  // popper anchor element
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  // popper placement type
  const [placement, setPlacement] = useState<PopperPlacementType>()

  const { error, user } = useAuth()

  // Handle popper click
  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
      //Toggle popper show flag
      setIsPopperOpen((prev) => placement !== newPlacement || !prev)
      // Set up popper placement
      setPlacement(newPlacement)
    }

  // Chahge the view if successful sign up
  if (user) {
    return <SuccessSignUp />
  }

  return (
    <>
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
            Sign Up
          </Typography>
          <Typography variant='subtitle1'>Welcome</Typography>
        </Box>

        <SocialAuth />

        <Typography variant='subtitle1' sx={{ fontSize: 12 }}>
          or
        </Typography>

        <Box sx={{ width: '100%', textAlign: 'right', mb: 5 }}>
          <SignUpForm />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            type='submit'
            variant='contained'
            form='signup-form'
            sx={{ mb: 4 }}
          >
            Sign Up
          </Button>

          <Button
            variant='outlined'
            sx={{ mb: 4 }}
            onClick={handleClick('top')}
          >
            Not now
          </Button>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <LinkStyled to='/auth/signin'>Already have an account?</LinkStyled>
          </Box>

          {/* Show error text
           */}
          {error && (
            <Typography textAlign='center' color='red' fontSize='12px'>
              {error}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Custom popper component
       */}
      <PopperStyled
        open={isPopperOpen}
        anchorEl={anchorEl}
        placement={placement}
      >
        <PopperContent onCloseClick={() => setIsPopperOpen(!isPopperOpen)} />
      </PopperStyled>
    </>
  )
}
