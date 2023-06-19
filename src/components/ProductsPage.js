import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchValue, setSearchValue] = useState('');

 const filteredProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  function searchWord(event){
    setSearchValue(event.target.value)
  }
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar value={searchValue} searchWord={searchWord} />
      <ProductTable products={filteredProduct} />
    </div>
  );
}

export default ProductsPage;
