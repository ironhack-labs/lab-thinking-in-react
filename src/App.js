import './App.css';
import ProductRow from './components/ProductRow';
import ProductsPage from './components/ProductsPage';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>whatever</h1>
      <ProductsPage />
        <SearchBar />
        <ProductTable />
          <ProductRow />
    </div>
  );
}

export default App;
