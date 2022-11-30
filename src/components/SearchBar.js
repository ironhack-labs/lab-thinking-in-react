import React from 'react';

export const SearchBar = ({ products, setQuery, setProducts, jsonData }) => {
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    //setProducts()
    event.target.checked
      ? setProducts(
          products.filter((product) => {
            return product.inStock === true;
          })
        )
      : setProducts(jsonData);
  };
  return (
    <>
      <input type="text" onChange={handleSearchChange} />
      <input type="checkbox" onChange={handleCheckboxChange} />
    </>
  );
};
