import React, { useState } from 'react';

function SearchBar({ handleFilter }) {
  const [query, setQuery] = useState('');
  return (
    <div className='search-bar'>
      <label>Search</label>
      <input
        value={query}
        type="text"
        onChange={(e) => {
          handleFilter(e.target.value);
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
