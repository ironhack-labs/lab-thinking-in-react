import React from 'react';
// import './SearchBar.css'

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(evt) => props.search(evt.target.value)}
      />
    </div>
  );
};

export default SearchBar;
