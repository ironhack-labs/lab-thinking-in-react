// src/App.js
import './App.css';
import ProductsPage from './components/ProductsPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple } from '@mui/material/colors';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: purple[500],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#fff',
      dark: '#ba000d',
      contrastText: '#000',
      custom: '#ba000d',
    },
  },
});

darkTheme = createTheme(darkTheme, {
  palette: {
    error: {
      main: darkTheme.palette.secondary.custom,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <ProductsPage />
      </div>
    </ThemeProvider>
  );
}
export default App;
