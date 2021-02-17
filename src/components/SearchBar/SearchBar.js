import React from "react";

function SearchBar({onChange, input, checked}){
  return(
    <div className="container-col margin">
    <label>Search</label>
    <input
      type="text"
      name="search"
      placeholder="Search product"
      value={input}
      onChange={onChange}
    />
    <div>
      <input 
        type="checkbox"
        name="checkInput"
        onChange={checked}
      />
      <label>Only show products on stock</label>
    </div>
   

    </div>
  )
}

export default SearchBar