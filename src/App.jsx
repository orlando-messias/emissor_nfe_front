import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import Routers from './routes/Routers';
import Header from './Components/Header';
import themes from './themes';

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <Routers />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
