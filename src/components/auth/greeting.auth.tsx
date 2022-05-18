import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import logo from '../../assets/images/Logo.png'
import background from '../../assets/images/Background Image.png'

export const GreetingAuth: FC = () => {
  return (
    <Box sx={{ width: 500, height: 700, mx: 10, mt: 4 }}>
      <img src={logo} alt='' style={{ width: 270, height: 120 }} />

      <Typography color='#fff' variant='h1' sx={{ mt: 10 }}>
        Create, share, rank, compare
      </Typography>
      <Typography color='#fff' variant='subtitle1' sx={{ my: 5 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
        earum! Inventore consequatur, enim veritatis iure beatae fugiat dolorem!
        Aspernatur itaque aperiam veniam nihil recusandae eum soluta illum
        inventore laborum explicabo.
      </Typography>

      <img
        src={background}
        alt=''
        style={{ opacity: 0.9, width: 540, height: 330 }}
      />
    </Box>
  )
}
