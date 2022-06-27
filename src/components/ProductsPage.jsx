// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  let filteredProducts = products.filter((element) =>
    element.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setProducts={setProducts}
      />
      <ProductTable products={filteredProducts}></ProductTable>
    </div>
  );
}

export default ProductsPage;
