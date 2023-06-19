import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [inStock, setInStock] = useState(false);

  const handleSearchInput = (e) => setSearch(e.target.value);
  const handleStockInput = (e) => setInStock(e.target.checked);

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(search.toLowerCase());
    const inStockMatch = !inStock || product.inStock;
    return nameMatch && inStockMatch;
  });

  return (
    <div className="prod-page">
      <h1>IronStore</h1>

      <SearchBar
        search={search}
        searchInput={handleSearchInput}
        inStock={inStock}
        stockInput={handleStockInput}
      />

      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
