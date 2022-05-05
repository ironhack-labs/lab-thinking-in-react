import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsPage from './components/ProductsPage';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <ProductsPage />
        <SearchBar />
        <ProductTable />
      </Container>
    </div>
  )
}

export default App;

