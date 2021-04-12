import React, { useState, useEffect } from 'react';
import './App.css';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';
import productsData from './data.json'

function App() {

  const [products, setProducts] = useState(null)
  const [search, setSearch] = useState('')
  const [stock, setStock] = useState(false)

  useEffect(() => {
    let prods = productsData.data.filter(prod => prod.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) )
    setProducts(prods)
  }, [search])

  useEffect(() => {
    stock 
      ? setProducts(productsData.data.filter(prod => prod.stocked))
      : setProducts(productsData.data)
  }, [stock])

  const handleSearch = (e) => setSearch(e.target.value)

  const handleStock = (e) => {
    setStock(e.target.checked)
  }

  return (
    <div className="App">
      <div className="container my-3">
        <h1>IronStore</h1>
        <SearchBar 
          handleSearch={handleSearch} 
          value={search} 
          handleStock={handleStock} 
          stockValue={stock}
        />
      </div>
      <div className="container">
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default App;
