// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from './../data.json';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState('');
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        jsonData={jsonData}
        products={filteredProducts}
        setQuery={setQuery}
        setProducts={setProducts}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
