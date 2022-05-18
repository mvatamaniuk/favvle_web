import { styled } from '@mui/material/styles'
import { Button, ButtonProps } from '@mui/material'

//Custom SocailButton component
export const SocialButton = styled(Button)<ButtonProps>(({ theme }) => ({
  background: '#fff',
  borderRadius: 33,
  fontFamily: 'Helvetica',
  fontWeight: 400,
  fontSize: 11,
  textTransform: 'none',
  color: '#636363',
  '&:hover': {
    background: '#fff',
  },
}))
