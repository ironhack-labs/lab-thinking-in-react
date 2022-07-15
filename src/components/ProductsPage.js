import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState('');

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar products={products} setQuery={setQuery} query={query} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
