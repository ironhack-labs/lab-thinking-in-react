import React from 'react';

export default function SearchBar(props) {
  function handlerChange(event) {
    let newValue = event.target.value;
    props.setQuery(newValue);
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
      <br></br>
      <input
        type="checkbox"
        name="checkedbox"
        // add propriety checked and assign as a value the value that you are sending as a propos from the parent
        // add onChange that is gonna call a handleCheckboxChange
      />
      <label htmlFor="checkbox">Only show products on stock</label>
    </div>
  );
}
