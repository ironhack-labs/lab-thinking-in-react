import React from 'react';

export default function SearchBar({ clbk }) {
  return (
    <form onChange={e => clbk(e.target.value)}>
      <h3>Search</h3>
      <input className="input" name="search"></input>
      <span className="checkboxContainer">
        <input type="checkbox" name="inStock"></input> Only show products on
        stock
      </span>
    </form>
  );
}
