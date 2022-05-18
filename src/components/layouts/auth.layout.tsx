import { FC } from 'react'
import { Box } from '@mui/material'

import { Outlet, useLocation } from 'react-router-dom'

import { GreetingAuth } from '../auth/greeting.auth'
import { ContainerStyled } from './styled/container.styled'
import {
  GREEN_GRADIENT,
  LIGHT_GREEN_GRADIENT,
} from '../../configs/theme/constants'

export const AuthLayout: FC = () => {
  const location = useLocation()

  const FLEX_DIRECTION =
    location.pathname === '/auth/signin' ? 'row-reverse' : 'row'

  const JUSTIFY =
    location.pathname === '/auth/signin' ? 'flex-start' : 'flex-end'

  const JUSTIFY_SIDE =
    location.pathname === '/auth/signin' ? 'flex-end' : 'flex-start'

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: FLEX_DIRECTION,
      }}
    >
      <ContainerStyled
        sx={{
          justifyContent: JUSTIFY,
          background: LIGHT_GREEN_GRADIENT,
        }}
      >
        <Outlet />
      </ContainerStyled>

      <ContainerStyled
        sx={{
          justifyContent: JUSTIFY_SIDE,
          background: GREEN_GRADIENT,
        }}
      >
        <GreetingAuth />
      </ContainerStyled>
    </Box>
  )
}
