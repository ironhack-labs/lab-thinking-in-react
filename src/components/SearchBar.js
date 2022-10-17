import React, { useState } from 'react';

const SearchBar = (props) => {
  const { onSearch, onCheck } = props;
  const [query, setQuery] = useState('');
  const [checked, setChecked] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked)
    onCheck(e.target.checked)
  }

  return (
    <div>
      <p>Search</p>
      <input type="text" value={query} onChange={handleQueryChange} />
      <br></br>
      <input type="checkbox" id="stock" checked={checked} onChange={handleCheckboxChange} />
      <label htmlFor="stock">Only show products in stock</label>
    </div>
  );
};

export default SearchBar;