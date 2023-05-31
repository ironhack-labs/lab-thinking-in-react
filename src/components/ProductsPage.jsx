import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { useState } from 'react';

function ProductsPage() {
  const [search, setSearch] = useState('');
  return (
    <div className="products-page">
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductTable search={search} />
    </div>
  );
}

export default ProductsPage;
