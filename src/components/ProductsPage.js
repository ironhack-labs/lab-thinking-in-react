import React, { useState } from 'react';
import '../App.css';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

// console.log(jsonData);
export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState('');
  const [inStock, setInStock] = useState(false);

  //   console.log('jsonData =>', products);

  const filteredProducts = products.filter((product) => {
    if (
      product.name.toLowerCase().includes(query.toLowerCase()) &&
      ((inStock && product.inStock === inStock) || !inStock)
    ) {
      return true;
    } else {
      return false;
    }
  });

  console.log('filteredProducts', filteredProducts);

  return (
    <div>
      <h1>ProductsPage</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        products={products}
        inStock={inStock}
        setInStock={setInStock}
      />
      <ProductTable
        products={filteredProducts}
        query={query}
        inStock={inStock}
      />
    </div>
  );
}
