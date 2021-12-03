import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useState } from 'react';
import Checkbox from './Checkbox';

function FilterableProductTable(props) {
  const { products } = props;
  const [searchResult, setSearchResult] = useState(products);

  const searchProducts = (item) => {
    if (item === '') {
      setSearchResult(products);
    } else {
      let filteredProducts = searchResult.filter((prod) =>
        prod.name.toLowerCase().includes(item.toLowerCase())
      );
      setSearchResult(filteredProducts);
    }
  };

  const showItemInStock = (item) => {
    if (item) {
      let filteredProducts = products.filter((prod) => prod.stocked === true);
      setSearchResult(filteredProducts);
    } else {
      setSearchResult(products);
    }
  };

  return (
    <div>
      <SearchBar searchProducts={searchProducts} />
      <Checkbox showItemInStock={showItemInStock} />
      <ProductTable products={searchResult} />
    </div>
  );
}

export default FilterableProductTable;
