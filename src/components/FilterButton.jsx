import React from 'react';

function FilterButton({ callback }) {
  return (
    <div>
      <label htmlFor="filterBtn">Only show products in stock</label>
      <input onClick={callback} type="checkbox" name="filterBtn" />
    </div>
  );
}

export default FilterButton;
