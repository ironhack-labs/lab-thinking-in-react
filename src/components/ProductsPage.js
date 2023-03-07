// src/components/ProductsPage.js

import { useState } from 'react';
import productsData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(productsData);
  // const [inStock, setInStock] = useState(false);

  const filterProducts = (query = '') => {
    const filter = query.toUpperCase().trim();

    if (filter==='') return setProducts(productsData);

    const filteredProducts = products.filter((product) => {
      return product.name.toUpperCase().indexOf(filter) > -1 ? true : false;
    });

    setProducts([...filteredProducts]);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filterProducts={filterProducts} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
