import './App.css';
import ProductsPage from './components/ProductsPage';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';

function App() {
  return (
    <div className="App">
      
      <ProductsPage />
      <SearchBar />
      <ProductTable />
      <ProductRow />

    </div>
  );
}

export default App;
