import React from 'react';

export default function SearchBar(props) {
  function handlerChange(event) {
    props.setQuery(event.target.value);
  }
  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        name="query"
        id="search"
        value={props.query}
        onChange={handlerChange}
      />
    </div>
  );
}
