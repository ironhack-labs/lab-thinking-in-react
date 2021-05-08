import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from "./ProductTable";

const FilterableProductTable = ({products}) => {

  const [productList, setProductList] = useState(products);
  const [filteredList, setFilteredList] = useState([]);
  const [showFilteredList, setShowFilteredList] = useState(false);

  const filterProductsHandler = (searchValue) => {
    const listCopy = [...productList];
    // console.log(`LIST COPIED`, listCopy);
    const filtered = listCopy.filter((productItem) => {
      return productItem.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    setShowFilteredList(true);
    setFilteredList(filtered);
  }

  return (
    <div>
      <SearchBar filterFunction={filterProductsHandler} />
      {showFilteredList ? 
        <ProductTable productList={filteredList} />
        :
        <ProductTable productList={products} />
      }
    </div>
  )
}

export default FilterableProductTable;
