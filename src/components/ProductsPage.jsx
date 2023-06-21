import { useState } from 'react';
import productsData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [isInStockChecked, setIsInStockChecked] = useState(false);

  function handleSearchQuery(e) {
    setQuery(e.target.value);
  }
  function handleOnlyInStock(e) {
    setIsInStockChecked(e.target.checked);
  }

  const filteredProducts = productsData.filter((product) => {
    const isNameFounded = product.name
      .toLowerCase()
      .startsWith(query.toLowerCase());
    return isNameFounded && (!isInStockChecked || product.inStock);
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        query={query}
        isInStockChecked={isInStockChecked}
        handleSearchQuery={handleSearchQuery}
        handleOnlyInStock={handleOnlyInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
