import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { AuthProvider } from './providers/AuthProvider'
import { useNavigation } from './hooks/navigation/useNavigation'

import { theme } from './configs/theme/mui.theme.config'
import { Provider } from 'react-redux'

import store from './redux/store'

const App = () => {
  // Root navigation
  const navigation = useNavigation()

  return (
    //Firebase auth provider
    <Provider store={store}>
      <AuthProvider>
        {/* Mui customize the theme,
         */}

        <ThemeProvider theme={theme}>
          <BrowserRouter>{navigation}</BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  )
}

export default App
