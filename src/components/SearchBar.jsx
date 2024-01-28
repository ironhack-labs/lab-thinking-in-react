import React, { useState } from "react";

function SearchBar({ onSearch}) {
  const [search, setSearch] = useState('');
 
  const handleSearch = (ev) => {
    const newSearch = ev.target.value;
    setSearch(newSearch);
    onSearch(newSearch);
    
  };

  return (
    <div>
      <h3>Search our Stock</h3>
      <div>
        <input type="text" placeholder="Search" value={search}  onChange={handleSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
