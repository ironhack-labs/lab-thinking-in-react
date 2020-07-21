import React from 'react';

const SearchBar = (props) => {
  const search = (event) => {
    props.callbackFilter(event.target.value);
  };

  const checkbox = (event) => {
    props.callbackCheckbox(event.target.checked);
  };

  return (
    <div>
      <div>
        <input
          className="input"
          name="searchbar"
          type="text"
          placeholder="Find a product"
          onChange={search}
          style={{ width: '80%' }}
        />
      </div>
      <div>
        <input
          className="checkbox"
          type="checkbox"
          name="checkbox"
          onClick={checkbox}
        />
        <label>Only show products on stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
