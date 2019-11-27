import React from 'react';

export default function SearchBar({ clbk }) {
  return (
    <form onChange={clbk} id="form">
      <label htmlFor="">Search</label>
      <input name="query" type="text" />
      <span>
        <input name="is-in-stock" type="checkbox" />
        <p>only show products on stock</p>
      </span>
    </form>
  );
}
