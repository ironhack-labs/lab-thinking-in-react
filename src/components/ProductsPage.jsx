import { useState } from 'react';
import jsonData from '../data.json';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  return (
    <div>
      <p>ProductsPage</p>
      <SearchBar />
      <ProductTable />
    </div>
  );
}
export default ProductsPage;
