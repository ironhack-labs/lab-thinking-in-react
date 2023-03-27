import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1 className='py-3 text-center'>IronStore</h1>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}
