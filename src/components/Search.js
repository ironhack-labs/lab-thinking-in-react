import React, { useState } from 'react';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');

  const executeSearch = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
    props.handleSearch(event.target.value.toLowerCase());
  };

  const handleCheckbox = () => {
    let filter = document.getElementById('checkbox').checked;
    props.inStock(filter);
  };

  return (
    <div>
      <form>
        <label>Search</label>
        <input
          className="search"
          type="text"
          name="input"
          value={searchInput}
          onChange={executeSearch}
        ></input>
      </form>

      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={handleCheckbox}
      ></input>
      <label> See only items in stock</label>
    </div>
  );
}

export default Search;
