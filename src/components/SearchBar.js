import React, { useState } from 'react';

export default function SearchBar(props) {

  function handleChange(event) {
    if (event.target.name === 'stock') {
      props.checkedBox ?props.setcheckedBox(false) : props.setcheckedBox(true);
    } else {
      props.setTypeWord(event.target.value);
    }
  }

  return (
    <div>
      <h2>Search</h2>
      <input name="search" type="text" onChange={(e) => handleChange(e)} />
      <form>
        <input
          onChange={(e) => handleChange(e)}
          type="checkbox"
          name="stock"
          value={props.checkedBox}
        />
      </form>
      <label>Only show products on stock</label>
    </div>
  );
}
