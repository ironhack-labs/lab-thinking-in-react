// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearchChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
    filterProducts(newSearchQuery, inStockOnly);

    };
    
    const handleStockChange = (event) => {
        const newInStockOnly = event.target.checked;
        setInStockOnly(newInStockOnly);
        filterProducts(searchQuery, newInStockOnly);
      };

      const filterProducts = (query, inStockOnly) => {
        const filteredProducts = jsonData.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) &&
          (product.inStock || !inStockOnly )
        );
        setProducts(filteredProducts);
      };

    return (
        <div>
          <h1>IronStore</h1>
          <SearchBar
            handleSearchChange={handleSearchChange}
            handleStockChange={handleStockChange}
            inStockOnly={inStockOnly}
          />
          <ProductTable products={products} />
        </div>
      );
    }
    

export default ProductsPage;