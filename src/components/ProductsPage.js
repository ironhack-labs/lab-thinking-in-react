import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [seeStock, setSeeStock] = useState(false);

  const onSearch = (value) => {
    setSearch(value);
  }

  const onSeeStock = () => {
    setSeeStock(!seeStock);
  }

  const filteredProducts = products
    .filter(elem => elem.name.toLowerCase().includes(search.toLowerCase()))
    .filter(elem => seeStock === false || elem.inStock);

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1 className='py-3 text-center'>IronStore</h1>
      <SearchBar search={search} onSearch={onSearch} seeStock={seeStock} onSeeStock={onSeeStock} />
      <ProductTable products={filteredProducts} />
    </div>
  )
}
