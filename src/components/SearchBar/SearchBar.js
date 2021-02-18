import React from "react";

function SearchBar({onChange, input, checked}){
  return(
    <div className="container-col margin">
    <label
    style={{"margin-bottom":"15px"}}
    >Search</label>
    <input
      style={{width:"600px", height:"25px"}} 
      type="text"
      name="search"
      placeholder="Search product"
      value={input}
      onChange={onChange}
    />
    <div>
      <input
        style={{"margin-top":"15px"}}
        type="checkbox"
        name="checkInput"
        onChange={checked}
      />
      <label className="text-label">Only show products on stock</label>
    </div>
   

    </div>
  )
}

export default SearchBar