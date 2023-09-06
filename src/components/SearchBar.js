import React, { useState } from 'react';

function SearchBar({ onSearchChange }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
        className="SearchBar"
      />
    </div>
  );
}

export default SearchBar;
