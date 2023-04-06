import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setProducts={setProducts} />
      <ProductTable products={products} />
      {/* product table renderiza uma lista */}
    </div>
  );
}

export default ProductsPage;
