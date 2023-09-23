// src/components/ProductsPage.js
import React from 'react';
import jsonData from '../data.json';
import SearchBar from './searchBar';
import ProductTable from './productTable';
import '../App.css';

function ProductsPage() {
  const [productsList, setProducts] = React.useState(jsonData);
  const [filteredProducts, setFilteredProducts] = React.useState(productsList);

  function handleFilter(query) {
    const filterList = productsList.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filterList);
  }

  return (
    <div className="products-page">
      <h1 className="page-title">IronStore</h1>
      <SearchBar handleFilter={handleFilter} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
