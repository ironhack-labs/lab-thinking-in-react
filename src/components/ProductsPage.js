import React from 'react';
import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

let currentSearch;
let currentCheck;

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const onChangeSearch = (text) => {
    setProducts((prevProducts) => {
      currentSearch = text
      return jsonData
        .filter((product) => product.name.indexOf(text) !== -1)
        .filter((product) =>
          currentCheck
            ? product.inStock === currentCheck
            : product.inStock !== undefined
        );
    });
  };
  const onChangeCheck = (check) => {
    currentCheck = check;
    setProducts((prevProducts) =>
      jsonData
        .filter((product) => (check ? product.inStock === check : product))
        .filter((product) => currentSearch ? product.name.indexOf(currentSearch) !== -1 : product)
    );
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onChangeSearch={onChangeSearch}
        onChangeCheck={onChangeCheck}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
