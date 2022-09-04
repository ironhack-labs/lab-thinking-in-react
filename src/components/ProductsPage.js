import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [search, setSearch] = useState('');
  const [stockFilter, setStockFilter] = useState(false);

  return (
    <div>
      <h2>IronStore</h2>
      <SearchBar
        search={search}
        setSearch={setSearch}
        stockFilter={stockFilter}
        setStockFilter={setStockFilter}
      />
      <ProductTable search={search} stockFilter={stockFilter} />
    </div>
  );
}

export default ProductsPage;
