import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <label>Search</label>
      <input
        className="input"
        type="text"
        placeholder="iPod Touch"
        value={props.search}
        onChange={props.onChange}
      />
    </div>
  );
}

export default SearchBar;
