import { useState } from 'react';

import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';
import jsonData from '../data.json';
import './ProductsPage.css';

export const ProductsPage = () => {
  const allProducts = jsonData;
  const [products, setProducts] = useState(allProducts);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const handleSearchForProducts = (searchQuery) => {
    if (!searchQuery && !showInStockOnly) {
      setProducts(allProducts);
    } else if (!searchQuery && showInStockOnly) {
      const inStockProducts = allProducts.filter((product) => {
        return product.inStock;
      });
      setProducts(inStockProducts);
    } else if (searchQuery && !showInStockOnly) {
      const filteredProducts = allProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      setProducts(filteredProducts);
    } else if (searchQuery && showInStockOnly) {
      const filteredProducts = allProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      const inStockProducts = filteredProducts.filter((product) => {
        return product.inStock;
      });

      setProducts(inStockProducts);
    }
  };

  const handleToggleProductsInStock = (isChecked) => {
    if (isChecked) {
      const inStockProducts = allProducts.filter((product) => {
        return product.inStock;
      });

      setProducts(inStockProducts);
    } else if (!isChecked) {
      setProducts(allProducts);
    }
    setShowInStockOnly(isChecked);
  };

  return (
    <div className="productsPage">
      <h1>Ironstore</h1>
      <SearchBar
        toggleProductsInStock={handleToggleProductsInStock}
        searchForProducts={handleSearchForProducts}
        showInStockOnly={showInStockOnly}
      />
      <ProductTable products={products} />
    </div>
  );
};
