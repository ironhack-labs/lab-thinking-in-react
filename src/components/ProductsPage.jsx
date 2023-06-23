import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const [searchWord, setSearchWord] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  let filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  if (showInStock) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.inStock;
    });
  }

  function handleSearch(event) {
    setSearchWord(event.target.value);
  }

  function handleInStock(event) {
    setShowInStock(event.target.checked);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        value={searchWord}
        handleSearch={handleSearch}
        handleInStock={handleInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
