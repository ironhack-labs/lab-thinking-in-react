
import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import {SearchBar } from './SearchBar';
import Checkbox from './Checkbox';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState();

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <Checkbox stock={stock} setStock={setStock} />
      <ProductTable
        products={products}
        setProducts={setProducts}
        search={search}
        stock={stock}
      />
    </div>
  );
};


export default ProductsPage