import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <article>
        <ProductTable search={search} />
      </article>
    </div>
  );
}

export default ProductsPage;
