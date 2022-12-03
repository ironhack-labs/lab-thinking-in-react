import React, { useState } from 'react';

const SearchBar = ({ updateSearch }) => {
  const [search, setSearch] = useState("");
  const [inStock, setInStock] = useState(false);

  const handleSearch = (e) => {
    let textValue = search;
    let checkValue = inStock;

    if (e.target.type === "text") {
      textValue = e.target.value;
      setSearch(e.target.value);
    }

    if (e.target.type === "checkbox") {
      checkValue = e.target.checked;
      setInStock(e.target.checked);
    }

    updateSearch({
      term: textValue,
      checked: checkValue
    });
  }

  return (
    <div className='search-bar'>
      <label>Search</label>
      <input type="text" value={search} onChange={handleSearch}/>
      <div>
        <input type="checkbox" checked={inStock} onChange={handleSearch}/>
        <label>Show only products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar;