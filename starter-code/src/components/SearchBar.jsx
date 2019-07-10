import React from "react";

export default function SearchBar({ userInput, userCheck }) {
  return (
    <div>
      <h3 className="search-bar">Search</h3>
      <input type="text" onChange={userInput} size="75" /> <br />
      <label>
        <input type="checkbox" onChange={userCheck} />
        &nbsp; Only show products in stock
      </label>
    </div>
  );
}
