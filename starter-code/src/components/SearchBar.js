import React from 'react';

const SearchBar = props => {
  const handleChange = e => {
    e.preventDefault();
    props.updateSearchText(e.target.value);
  };
  const handleCheckbox = e => {
    props.updateCheckbox(e.target.checked);
  };

  return (
    <div>
      <p>
        <label htmlFor="search">Search</label>
      </p>

      <p>
        <input value={props.search} onChange={handleChange}></input>
      </p>
      <input
        id="show"
        type="checkbox"
        name="show"
        checked={props.show}
        onChange={handleCheckbox}
      />

      <label htmlFor="show">Only show products in stock</label>
    </div>
  );
};
export default SearchBar;
