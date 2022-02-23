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
    <div className="search">
      <form>
        <label>Search</label>
        <input
          type="text"
          name="input"
          value={searchInput}
          onChange={executeSearch}
        ></input>
      </form>
      <form>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleCheckbox}
        ></input>
        <label>See only items in stock</label>
      </form>
    </div>
  );
}

export default Search;
