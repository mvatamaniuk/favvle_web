import { Routes, Route } from 'react-router-dom'

import { AuthLayout } from '../../components/layouts/auth.layout'

import { SignIn } from '../../pages/auth/SignIn'
import { SignUp } from '../../pages/auth/SignUp'

export const useNavigation = () => {
  return (
    <Routes>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  )
}
