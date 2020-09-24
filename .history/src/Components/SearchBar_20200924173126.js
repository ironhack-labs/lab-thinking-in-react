import React from 'react';

export default function SearchBar(props) {
  function handlerChange(event) {
    let newValue = event.target.value;
    props.setQuery(newValue);
  }

  function handleCheckboxChange() {
    props.handleCheckbox();
  }

  return (
    <div>
      <h1>Search Bar</h1>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        name="query"
        id="search"
        value={props.query}
        onChange={handlerChange}
      />
      <br></br>
      <input
        type="checkbox"
        name="checkedbox"
        value={props.checkbox}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox">Only show products on stock</label>
    </div>
  );
}
