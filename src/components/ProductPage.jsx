// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [productsList, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(productsList);

  function handleFilter(query) {
    const filterList = productsList.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filterList)
  }

  return (
    <div className='w-100'>
      <h1>IronStore</h1>
      <SearchBar handleFilter={handleFilter} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
