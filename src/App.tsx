import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { AuthProvider } from './providers/AuthProvider'
import { useNavigation } from './hooks/navigation/useNavigation'

import { theme } from './configs/theme/mui.theme.config'

const App = () => {
  // Root navigation
  const navigation = useNavigation()

  return (
    //Firebase auth provider
    <AuthProvider>
      {/* Mui customize the theme,
       */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>{navigation}</BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
