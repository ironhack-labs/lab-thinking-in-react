import React from 'react';

function SearchBar(props) {
 
  return (
    <div>
      <label>
        Search the site:
        <input
          type="search"
          value={props.value}
          name="search"
          onChange={props.searchWord}
        ></input>
      </label>
    </div>
  );
}

export default SearchBar;
