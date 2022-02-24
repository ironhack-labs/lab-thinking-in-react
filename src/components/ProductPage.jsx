import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductPage() {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState('');
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setQuery={setQuery} />
      <ProductTable products={products} query={query} />
    </div>
  );
}
