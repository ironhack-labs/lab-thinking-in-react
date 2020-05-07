import React, { Component } from 'react';

export default function SearchBar(props) {
  const handleChange = (e) => {
    props.setQuery(e.target.value);
  };

  const handleClick = (e) => {
    props.setInStock(e.target.checked);
  };
  return (
    <>
      <p>Search</p>
      <input type="text" value={props.search} onChange={handleChange} />
      <input
        type="checkbox"
        checked={props.onlyShowProductsInStock}
        onChange={handleClick}
        name=""
        id=""
      />
    </>
  );
}
