import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input
        style={{ width: '100%' }}
        name="search"
        value={props.search}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default SearchBar;
