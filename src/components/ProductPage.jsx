import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductPage() {
  const [products] = useState(jsonData);
  const [query, setQuery] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setQuery={setQuery} setCheckbox={setCheckbox} />
      <ProductTable products={products} query={query} checkbox={checkbox} />
    </div>
  );
}
