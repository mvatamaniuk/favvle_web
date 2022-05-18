import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

// Custom NavLink component
export const LinkStyled = styled(NavLink)(({ theme }) => ({
  fontFamily: 'Helvetica',
  fontWeight: 400,
  fontSize: 14,
  letterSpacing: 0.336,
  // Use theme palette color
  color: theme.palette.primary.main,
  opacity: 0.55,
}))
