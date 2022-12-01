import './App.css';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import Searchbar from './Components/ProductsPage/SearchBar/SearchBar';
import ProductsTable from './Components/ProductsPage/ProductTable/ProductTable';
import ProductRow from './Components/ProductsPage/ProductRow/ProductRow';

function App() {
  return (
    <div className='App'>
      <ProductsPage />
      <Searchbar />
      <ProductsTable />
    </div>
  );
}

export default App;
