import React from "react";

function SearchBar({ callback }) {
  return (
    <input onChange={callback} type="text" placeholder="Search..." />
  );
}

export default SearchBar;
