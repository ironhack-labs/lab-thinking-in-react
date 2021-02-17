import React from 'react';
import {data} from './data.json'
import './App.css';
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'
import ProductRow from './components/ProductRow'

function App() {

  const [products, setProducts] = React.useState(data)
  const [query, setQuery] = React.useState('')

  function handleQuery({ target }) {
    setQuery(target.value)
  }

  function filterProducts(query) {
    const filteredProducts = products.filter((product) => product.includes(query))
    setProducts(filteredProducts)
  }

  return (
    <div className="App">
      <SearchBar handleQuery={handleQuery} query={query}/>
      <ProductTable products={products}/>
      <ProductRow />
    </div>
  );
}

export default App;
