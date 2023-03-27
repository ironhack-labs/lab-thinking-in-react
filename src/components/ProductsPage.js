import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');

  const onSearch = (value) => {
    setSearch(value);
  }

  const filteredProducts = products.filter(elem => elem.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1 className='py-3 text-center'>IronStore</h1>
      <SearchBar search={search} onSearch={onSearch} />
      <ProductTable products={filteredProducts} />
    </div>
  )
}
