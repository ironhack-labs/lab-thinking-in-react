import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(jsonData);
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductTable products={products} setProducts={setProducts} />
    </div>
  );
}
export default ProductsPage;
