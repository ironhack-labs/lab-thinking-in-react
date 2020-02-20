import React from 'react';

export default function SearchBar({ clbk }) {
  return (
    <div>
      <form onChange={e => clbk(e.target)} className="search-bar">
        <label htmlFor="">Search</label>
        <input type="text" name="search" className="bar" />
        <div className="checkbox-stock">
          <input type="checkbox" name="checkbox" />
          <label htmlFor="">Only show products on stock</label>
        </div>
      </form>
    </div>
  );
}
