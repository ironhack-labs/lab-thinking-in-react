// src/App.js
import './App.css';
import ProductsPage from './components/ProductsPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';
import { blue } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[300],
    },
    secondary: {
      main: red[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProductsPage />
    </ThemeProvider>
  );
}
export default App;
