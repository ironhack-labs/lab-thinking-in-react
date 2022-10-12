import './styles.css';
import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
  const { handleSearch } = props;
  const [inputValues, setInputValues] = useState({
    search: '',
    inStock: false,
  });

  const handleInputChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    handleSearch(inputValues);
  }, [inputValues]);

  return (
    <div className="search-bar">
      <div className="search-bar-input">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Filter the items you want"
          value={inputValues.search}
          onChange={handleInputChange}
        />
      </div>
      <div className="search-bar-check">
        <label htmlFor="checkbox">Only show products in stock</label>
        <input
          type="checkbox"
          name="inStock"
          id="inStock"
          checked={inputValues.inStock}
          onChange={handleInputChange}
        />
      </div>
      <hr />
    </div>
  );
};

export default SearchBar;
