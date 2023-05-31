import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import jsonData from './data.json';
import SearchBar from './components/SearchBar.jsx'
import ProductTable from './components/ProductTable.jsx'

function App() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");


  return (
    <div className="App">
       <div>
        <h1>IronStore</h1>
      </div> 
      
      <SearchBar
        search={search}
        setSearch={setSearch}

      />
      <ProductTable
        products={products}
        setProducts={setProducts}
        search={search}

      />

    </div>
  );
}

export default App;
