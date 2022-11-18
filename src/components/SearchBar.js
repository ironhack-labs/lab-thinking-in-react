import React, { useState } from 'react';

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("")
  const handleSearcher = (event) => {
    setSearchInput(event.target.value)
    props.filterProduct(event.target.value);
  };
  return (
    <div className="search">
      <label>Search</label>
      <input value={searchInput} type="text" onChange={handleSearcher}/>
    </div>
  );
}

export default SearchBar;