import React from "react";

export default function SearchBar({
  handleFilter,
  filter,
  inStock,
  handleCheckBox,
}) {
  return (
    <div>
      <input
        type="text"
        onChange={handleFilter}
        value={filter}
        placeholder="Filter..."
      />
      <input type="checkbox" checked= {inStock} onChange={handleCheckBox}/>
    </div>
  );
}
