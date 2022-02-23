import React, { useState } from 'react';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');

  const executeSearch = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
    props.handleSearch(event.target.value.toLowerCase());
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
    </div>
  );
}

export default Search;
