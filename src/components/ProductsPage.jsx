import { useState } from 'react';

import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';
import jsonData from '../data.json';
import './ProductsPage.css';

export const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [showInStockOnly, setShowInStockOnly] = useState(true);

  const handleSearchForProducts = (searchQuery) => {
    if (!searchQuery) {
      setProducts(jsonData);
    } else if (searchQuery) {
      const filteredProducts = jsonData.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      setProducts(filteredProducts);
    }
  };

  const handleToggleProductsInStock = () => {
    if (showInStockOnly) {
      const productsInStock = jsonData.filter((product) => {
        return product.inStock;
      });
      setProducts(productsInStock);
    } else if (!showInStockOnly) {
      setProducts(jsonData);
    }
    setShowInStockOnly(!showInStockOnly);
  };

  return (
    <div className="productsPage">
      <h1>Ironstore</h1>
      <SearchBar
        toggleProductsInStock={handleToggleProductsInStock}
        searchForProducts={handleSearchForProducts}
      />
      <ProductTable products={products} />
    </div>
  );
};
