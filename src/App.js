import React, { useState } from 'react';
import jsondata from './data.json';
import './App.css';
import FilterableProductTable from './components/filterableproducttable/FilterableProductTable';
import SearchBar from './components/searchbar/SearchBar';

function App() {
  const [products, setProducts] = useState(jsondata.data);
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChange = (e) => {
    let { value } = e.target;
    setSearchValue(value)
    let p = products.filter(product =>{
      return product.name.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredProducts(p)
  }



  return (
    <div className="App">
      <div>
        <SearchBar  searchValue={searchValue} handleChange={handleChange}/>
      </div>
      {!searchValue && filteredProducts.length<=0 && <FilterableProductTable products={products} />}
      {searchValue && <FilterableProductTable products={filteredProducts} />}
    </div>
  );
}

export default App;
