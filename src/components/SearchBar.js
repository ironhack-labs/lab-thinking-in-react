import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="searchValue"
          placeholder="Search for products"
          onChange={props.onSearch}
        ></input>
        <br></br>
        <label htmlFor="checked">Show only in stock products</label>
        <input
          type="checkbox"
          name="checked"
          onChange={(e) => props.onCheckbox(e)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
