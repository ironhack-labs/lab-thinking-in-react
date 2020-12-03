import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form style={{ marginBottom: '20px' }}>
        <input
          style={{ width: '70%', marginBottom: '20px' }}
          className="input is-primary"
          type="text"
          name="searchValue"
          placeholder="Search for products"
          onChange={props.onSearch}
        ></input>
        <br></br>
        <label htmlFor="checked">
          <strong>Show only in stock products</strong>
        </label>
        <input
          className="radio"
          type="checkbox"
          name="checked"
          onChange={(e) => props.onCheckbox(e)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
