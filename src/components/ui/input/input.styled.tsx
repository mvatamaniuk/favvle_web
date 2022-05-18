import { InputBase, styled, TextFieldProps } from '@mui/material'

export const InputStyled = styled(InputBase)<TextFieldProps>(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0px 4px 10px rgba(21, 87, 88, 0.5)',

  borderRadius: 5,
  padding: '2px 10px',
  fontSize: 12,
  '::placeholder': {
    fontSize: 10,
  },
  '&.Mui-error': {
    border: '1px solid #F43333',
  },
}))
