import React, { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import jsonData from '../data.json';

function ProductPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>Iron Store</h1>
      <SearchBar productData={products} />
      <ProductTable productData={products} />
    </div>
  );
}

export default ProductPage;
