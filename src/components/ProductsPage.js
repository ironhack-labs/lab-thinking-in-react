import { useState } from 'react';
import jsonData from '../data.json';
import Search from './Search';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
      <Search />
      <ProductTable allProducts={products} />
    </div>
  );
}

export default ProductsPage;
