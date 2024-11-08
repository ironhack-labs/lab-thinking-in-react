import { useState } from "react";

const SearchBar = ({
  searchFields,
  setSearchFields,
  setFilteredProds,
  products,
}) => {
  function filterProducts(newSearch) {
    let filteredStrArrs = [...products];
    if (newSearch.searchStr) {
      filteredStrArrs = filteredStrArrs.filter((product) => {
        return (
          product.name
            .toUpperCase()
            .search(newSearch.searchStr.toUpperCase()) >= 0 ||
          product.category
            .toUpperCase()
            .search(newSearch.searchStr.toUpperCase()) >= 0
        );
      });
    }

    if (newSearch.prodInStock) {
      filteredStrArrs = filteredStrArrs.filter((product) => {
        return product.inStock === newSearch.prodInStock;
      });
    }

    setFilteredProds([...filteredStrArrs]);
  }

  function handleChange(e) {
    const { name, type, checked, value } = e.target;
    let newSearch = {
      ...searchFields,
      [name]: type === "checkbox" ? checked : value,
    };
    setSearchFields({ ...newSearch });

    filterProducts(newSearch);
  }

  return (
    <div className="search-area">
      <label htmlFor="searchStr">Search</label>
      <input
        name="searchStr"
        id="searchStr"
        type="text"
        value={searchFields.searchStr}
        onChange={handleChange}
      />
      <input
        name="prodInStock"
        type="checkbox"
        value={searchFields.prodInStock}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
