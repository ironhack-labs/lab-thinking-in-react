import { useState } from 'react';
import jsonData from './../../data.json';

import SearchBar from '../SearchBar/SearchBar.component';
import ProductTable from '../ProductTable/ProductTable.components';
export default function ProductsPage() {
  //State
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable />
    </div>
  );
}
