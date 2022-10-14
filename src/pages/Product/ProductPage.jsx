import React, { useState } from 'react';
import ProductTable from '../../components/Producttable/ProductTable';
import SearchBar from '../../components/Searchbar/SearchBar';
import jsonData from '../../data.json';

const ProductPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(products);
  return (
    <div className="product-page-container">
      <h1 className="product-title-page">Ironstore</h1>
      <SearchBar handleChange={handleChange} search={search} />
      <ProductTable products={products} search={search} />
    </div>
  );
};

export default ProductPage;
