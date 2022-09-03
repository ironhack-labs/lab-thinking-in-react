import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPages() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default ProductsPages;
