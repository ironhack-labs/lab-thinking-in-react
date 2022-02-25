import React from 'react';
import { useState } from 'react';
import data from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState(data);
  const [query, setQuery] = useState('');
  const [inStock, setInStock] = useState(false);

  console.log(setQuery);
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setQueryProp={setQuery} setInStockProp={setInStock} />
      <ProductTable
        queryProp={query}
        products={products}
        inStockProp={inStock}
      />
    </div>
  );
}
