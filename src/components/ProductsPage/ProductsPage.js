import { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import jsonData from '../../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  )
}

export default ProductsPage