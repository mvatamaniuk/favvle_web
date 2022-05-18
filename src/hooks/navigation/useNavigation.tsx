import { Routes, Route } from 'react-router-dom'

import { AuthLayout } from '../../components/layouts/auth.layout'

import { SignIn } from '../../pages/auth/SignIn'
import { SignUp } from '../../pages/auth/SignUp'

export const useNavigation = () => {
  return (
    // Container for a nested tree of elements
    <Routes>
      {/* Declares an element that should be rendered at a certain URL path.
       */}
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  )
}
