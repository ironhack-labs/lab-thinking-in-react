import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage(props) {
  const [products, setProducts] = useState(jsonData);

  return (
    <div className="prod-page">
      <h1>IronStore</h1>

      <SearchBar />

      <ProductTable />
    </div>
  );
}

export default ProductsPage;
