import React from 'react';
import 'bulma/css/bulma.css';

const SearchBar = ({ onChange }) => {

  

  const handleChange = ({target}) => {
    onChange(target.value)
};

  return (
    <div className="SearchBar">
      <input
        className="input is-success"
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Search Product"
      />
    </div>
  );
};

export default SearchBar;
