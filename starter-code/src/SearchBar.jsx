import React from 'react';

const SearchBar = props => {
  const handleChange = event => {
    props.setQuery(event.target.value);
  };

  const handleChecked = event => {
    console.log(event.target.checked);
    props.setCheckbox(event.target.checked);
  };
  return (
    <form>
      <label htmlFor="query">Search</label>
      <input
        type="text"
        name="query"
        id="query"
        value={props.query}
        onChange={handleChange}
      ></input>
      <div>
        <input
          type="checkbox"
          name="inStockCheck"
          checked={props.showIfIsStocked}
          onChange={handleChecked}
          id="inStockCheck"
        ></input>
        <label htmlFor="inStockCheck">Only show products in stock</label>
      </div>
    </form>
  );
};

export default SearchBar;
