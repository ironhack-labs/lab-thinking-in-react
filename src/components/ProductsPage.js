// src/components/ProductsPage.js

import { useState } from 'react';
import productsData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(productsData);
  const [onlyInStock, setOnlyInStock] = useState(false);

  const filterProducts = (query = '', inStock = onlyInStock) => {
    const filter = query.toUpperCase().trim();

    setOnlyInStock(inStock);

    const filteredProducts = productsData.filter((product) => {
      if (inStock)
        return product.name.toUpperCase().indexOf(filter) > -1
          ? product.inStock
            ? true
            : false
          : false;
      return product.name.toUpperCase().indexOf(filter) > -1 ? true : false;
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
