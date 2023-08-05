import ProductsPage from './components/ProductsPage';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProductsPage></ProductsPage>
      <SearchBar></SearchBar>
      <ProductTable></ProductTable>
    </div>
  );
}

export default App;
