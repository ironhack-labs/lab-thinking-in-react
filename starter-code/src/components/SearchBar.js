import React from 'react';

const SearchBar = ({nameSearch, nameStock, holder, value, onChange, onCheck}) => (
  <section className="search-bar">
    <div>
      <input type="text" name={nameSearch} placeholder={holder} onChange={onChange} autoFocus />
    </div>
    <div>
      <input type="checkbox" name={nameStock} onChange={onCheck} /> <label htmlFor="">Only show products in stock</label>
    </div>
  </section>
);

export default SearchBar;