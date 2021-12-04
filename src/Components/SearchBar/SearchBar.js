import React from 'react';

const SearchBar = (props) => {

  return (
    <div className="SearchBar">
    <h5>Search</h5>
      <input
        type="text"
        onChange={(event) => props.search(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
