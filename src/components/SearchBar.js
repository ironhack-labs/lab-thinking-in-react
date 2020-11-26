import React, { useState } from 'react';

const initialState = {
  search: '',
  inStock: false,
};

function SearchBar(props) {
  const [allValues, setAllValues] = useState(initialState);

  const handleSearchInput = (event) => {
    let { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      value = checked;
    }

    setAllValues({ ...allValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchProduct(allValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <input
        name="search"
        type="text"
        value={allValues.search}
        onChange={handleSearchInput}
      />
      <label htmlFor="inStock">Only show in stock</label>
      <input
        type="checkbox"
        name="inStock"
        value={allValues.inStock}
        onChange={handleSearchInput}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
