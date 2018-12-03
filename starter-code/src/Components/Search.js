import React from "react";

const Search = ({ handleChange, handleChangeBox, checked }) => (
  <div>
    <input onChange={handleChange} type="text" placeholder="Search..." />
    <input onChange={handleChangeBox} type="checkbox" checked={checked} /> Only
    show products on stock
  </div>
);

export default Search;
