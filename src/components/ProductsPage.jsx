import { useState } from 'react';
import data from '../data.json';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export const ProductsPage = () => {
  const [products, setProducts] = useState(data);

  function handleSearch(userInput) {
    if (!userInput) {
      setProducts(data);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(userInput.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }

  function showInStockOnly(bool) {
    if (bool === true) {
      const inStockProducts = data.filter((product) => product.inStock);
      setProducts(inStockProducts);
    } else {
      setProducts(data);
    }
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} showInStockOnly={showInStockOnly} />

      <ProductTable products={products} />
    </div>
  );
};
