import React, { useState } from 'react';
import ProductTable from '../../components/Producttable/ProductTable';
import SearchBar from '../../components/Searchbar/SearchBar';
import jsonData from '../../data.json';

const ProductPage = () => {
  const [products, setProducts] = useState(jsonData);
  console.log(products);
  return (
    <div className="product-page-container">
      <h1 className="product-title-page">Ironstore</h1>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductPage;
