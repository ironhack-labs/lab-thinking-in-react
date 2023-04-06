// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyShowStocked, setOnlyShowStocked] = useState(false);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOnlyShowStockedChange = (event) => {
    setOnlyShowStocked(event.target.checked);
  };

  const filteredProducts = products.filter((product) => {
    const includesQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (onlyShowStocked) {
      return includesQuery && product.inStock;
    }

    return includesQuery;
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchQuery={searchQuery}
        onlyShowStocked={onlyShowStocked}
        onSearchQueryChange={handleSearchQueryChange}
        onOnlyShowStockedChange={handleOnlyShowStockedChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
