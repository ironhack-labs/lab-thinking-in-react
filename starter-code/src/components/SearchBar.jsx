import React from "react";

export default function SearchBar({handleChange}) {
  return (
    <div className="search-bar">
    <label>Search</label>
     <input type="text"
         onChange={handleChange}
     />
     <label>Only show product in stock</label>
     <input type="checkbox" name="stockProduct" id="stockProduct"/>
    </div>
  );
}