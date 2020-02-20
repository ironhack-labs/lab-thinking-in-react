import React from 'react';

const SearchBar = props => {
  return (
    <div>
      <form action="">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          onChange={e => {
            props.updateSearchText(e.target.value);
          }}
          value={props.search}
        />
      </form>
    </div>
  );
};

export default SearchBar;
