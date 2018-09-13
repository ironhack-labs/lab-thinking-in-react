import React from 'react';

const Search = props => {
  return (
    <form>
      <input
        type="text"
        placehoder="product name"
        onChange={props.handleQueryChange}
        value={props.query}
      />
    </form>
  );
};

export default Search;