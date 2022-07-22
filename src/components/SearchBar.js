import react from 'react';
import { useState } from 'react';
import jsonData from '../data.json';

const SearchBar = ({
  search,
  setSearch,
  products,
  setFilteredProductArray,
}) => {
  // const [filteredProductArray, setFilteredProductArray] = useState(jsonData);
  // const [products, setProducts] = useState(jsonData);

  const updateSearch = (event) => {
    const newProductArray = products.filter((individualProduct) => {
      return individualProduct.name
        .toLowerCase()
        .includes(event.currentTarget.value.toLowerCase());
    });
    setSearch(event.target.value);
    setFilteredProductArray(newProductArray);
  };

  return (
    <div className="searchBar">
      <label>Search Products </label>
      <input type="text" value={search} onChange={updateSearch} />
    </div>
  );
};

export default SearchBar;
