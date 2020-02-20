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
        <br />
        <br />
        <label htmlFor="inStock">Only show products in stock </label>
        <input
          type="checkbox"
          name="inStock"
          onChange={e => {
            props.handleCheckboxChange(e.target.checked);
          }}
          value={props.inStock}
        />
      </form>
    </div>
  );
};

export default SearchBar;
