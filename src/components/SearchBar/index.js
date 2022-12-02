import React, { useState } from 'react';

const SearchBar = ( {getSearch} ) => {
  const [search, setSearch] = useState("");
  const [stock, setStock] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    getSearch(e.target.value);
  }

  const handleStock = (e) => {
    setStock(e.target.checked);
    return e.target.checked;
  }

  return (
    <div className='search-bar'>
      <label>Search</label>
      <input type="text" value={search} onChange={handleSearch}/>
      <div>
        <input type="checkbox" checked={stock} onChange={handleStock}/>
        <label>Show only products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar;