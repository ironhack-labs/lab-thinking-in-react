import React, { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import jsonData from '../data.json';

function ProductPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchField, setSearchField] = useState('');
  const [productsData, setproductsData] = useState(jsonData);
  const [inStockField, setInStockField] = useState(true);

  //   console.log('INSOTCK FIELD', inStockField);
  const filteredProducts = productsData.filter((product) => {
    if (inStockField) {
      return product.name.toLowerCase().includes(searchField.toLowerCase());
    } else {
      return (
        product.name.toLowerCase().includes(searchField.toLowerCase()) &&
        product.inStock === true
      );
    }
  });

  console.log('INSOTCK FIELD', inStockField);
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleCheckBox = (checkBoxStatus) => {
    setInStockField(checkBoxStatus);
  };

  return (
    <div>
      <h1>Iron Store</h1>
      <SearchBar
        productData={filteredProducts}
        handleChange={handleChange}
        handleCheckBox={handleCheckBox}
      />
      <ProductTable productData={filteredProducts} />
    </div>
  );
}

export default ProductPage;
