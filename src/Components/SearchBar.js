import React from 'react';

export default function SearchBar(props) {
  function handlerChange(event) {
    props.setQuery(event.target.value);
  }
  function handlerCheckbox(event) {
    props.setStock(event.target.checked);
  }

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="query"
        id="search"
        value={props.query}
        onChange={handlerChange}
      />
      <label htmlFor="onStock">Only show products on stock</label>
      <input
        type="checkbox"
        name="onStock"
        id="onStock"
        checked={props.onStock}
        onChange={handlerCheckbox}
      />
    </div>
  );
}
