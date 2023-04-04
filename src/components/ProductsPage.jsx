import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import { useState } from 'react';
import jsonData from '../data.json';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <SearchBar products={products} setProducts={setProducts}/>
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
