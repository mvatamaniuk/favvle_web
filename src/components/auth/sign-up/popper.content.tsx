import { FC } from 'react'
import { Box, IconButton, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface IPopperContentProps {
  onCloseClick?: () => void
}

//Popper content component for the sign up page
export const PopperContent: FC<IPopperContentProps> = ({ onCloseClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ alignSelf: 'flex-end' }}>
        <IconButton
          onClick={onCloseClick}
          disableRipple
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.4)',
            width: 20,
            height: 20,
            boxShadow: '2px 2px 6px rgba(21, 87, 88, 0.5)',
          }}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      </Box>

      <Typography variant='h1' fontSize='20px' sx={{ mt: 3 }}>
        Are you sure?
      </Typography>

      <Box sx={{ my: 5 }}>
        <Typography variant='subtitle1' fontSize='14px'>
          You’ve reached the maximum of 5 lists for Free.
        </Typography>

        <Typography variant='subtitle1' fontSize='14px'>
          Upgrade your Plan to go beyond the limits!
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          my: 2,
        }}
      >
        <Button variant='contained' fullWidth sx={{ mr: 2 }}>
          Sign Up
        </Button>
        <Button variant='outlined' fullWidth>
          Yes, skip
        </Button>
      </Box>
    </Box>
  )
}
