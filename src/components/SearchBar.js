import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form>
        <input type="text" onChange={props.onSearch}></input>
      </form>
    </div>
  );
};

export default SearchBar;
