import './App.css';
import ProductsPages from './components/ProductsPages ';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div className="App">
      <ProductsPages></ProductsPages>
      <SearchBar></SearchBar>
      <ProductTable></ProductTable>
      {/* <ProductRow></ProductRow> */}
    </div>
  );
}

export default App;
