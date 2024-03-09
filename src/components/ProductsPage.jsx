// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const filterProducts = (wordToSearch) => {
    // Case insensitive search
    wordToSearch = wordToSearch.toLowerCase();
    setProducts(
      jsonData.filter((product) => {
        return product.name.toLowerCase().includes(wordToSearch);
      })
    );
  };

  const toggleInStock = () => {
    // If the products on page are the full list, toggle to show only in-stock products
    if (products.length === jsonData.length) {
      setProducts(
        jsonData.filter((product) => {
          return product.inStock;
        })
      );
    } else {
      // Otherwise, toggle to show all
      setProducts(jsonData);
    }
  };

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar filterProducts={filterProducts} />
      <input type="checkbox" onChange={toggleInStock} />
      <label htmlFor="stockCheckbox">Only show products in stock</label>

      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
