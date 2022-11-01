import React, { useState } from 'react';

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');

  console.log('Searchbar Props: ', props);
  const allProducts = props.products;

  function handleChange(elem) {
    setSearchValue(elem.target.value);
    const filteredProducts = allProducts.filter((elem) => {
      return elem.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    console.log('filteredProducts', filteredProducts);
    console.log('SearchValue', searchValue);
  }

  return (
    <div>
      <p>Search</p>
      <input
        name="search"
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
