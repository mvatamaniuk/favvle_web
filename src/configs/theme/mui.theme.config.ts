import { createTheme } from '@mui/material/styles'
import { GREEN_GRADIENT, LIGHT_GREEN_GRADIENT } from './constants'
import { buttonStyles } from './shared-styles/button.styles'

export const theme = createTheme({
  palette: {
    gradient: {
      main: 'linear-gradient(180deg, #F18B6D 0%, #AD3C3B 100%)',
      lightGreen: LIGHT_GREEN_GRADIENT,
      green: GREEN_GRADIENT,
    },
    primary: {
      main: '#154A4E',
    },
    warning: {
      main: '#FA5959',
    },
  },
})

theme.typography = {
  ...theme.typography,
  h1: {
    fontSize: 26,
    fontFamily: 'Montserrat',
    fontWeight: 600,
    letterSpacing: 0.35,
    color: theme.palette.primary.main,
    opacity: 0.7,
  },
  subtitle1: {
    fontSize: 17,
    opacity: 0.55,
    letterSpacing: 0.36,
    fontWeight: 400,
    color: theme.palette.primary.main,
  },
}

theme.components = {
  ...theme.components,
  MuiButton: {
    styleOverrides: {
      contained: {
        ...buttonStyles,
        background: theme.palette.gradient.main,
      },
      outlined: {
        ...buttonStyles,
        background: '#BAD7D5',
      },
    },
  },
}
