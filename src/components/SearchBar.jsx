import React from 'react';
import 'bulma/css/bulma.css';

const SearchBar = () => {
  return (
    <div className="SearchBar">
        <input className="input is-success" type="text" name="search" placeHolder='Search Product' />
    </div>
  );
};

export default SearchBar;
