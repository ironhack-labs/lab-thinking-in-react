import React, { useState, useEffect } from 'react';

function Search({ onSearch, onCheckBox }) {
  const changeHandler = (e) => {
    const value = e.currentTarget.value;
    onSearch(value.toLowerCase());
  };

  return (
    <div>
      <h2> Search </h2>
      <input type="text" name="search" onChange={changeHandler} />
      <label>
        <input type="checkbox" name="stock" onChange={onCheckBox} />
        Only show products on stock
      </label>
    </div>
  );
}

export default Search;
