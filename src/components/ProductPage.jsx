// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default ProductsPage;
