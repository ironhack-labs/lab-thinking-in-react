// src/components/ProductsPage.js

import { useState } from 'react';
import productsData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(productsData);

  const filterProducts = (query = '', inStock = false) => {
    const filter = query.toUpperCase().trim();

    const filteredProducts = productsData.filter((product) => {
      if (inStock)
        return product.name.toUpperCase().includes(filter)
          ? product.inStock
            ? true
            : false
          : false;
      return product.name.toUpperCase().includes(filter) ? true : false;
    });

    setProducts([...filteredProducts]);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onlyInStock={filterProducts} filterProducts={filterProducts} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
