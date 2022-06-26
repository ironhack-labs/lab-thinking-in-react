import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { useState } from 'react';
import jsonData from '../data.json';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');

  console.log(products);

  const displayProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(displayProducts);

  return (
    <div className="productPage">
      <header>
        <h1>IronStore</h1>
      </header>
      <div className="searchBar">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="table">
        <ProductTable displayProducts={displayProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
