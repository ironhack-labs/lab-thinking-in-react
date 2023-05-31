import React from "react";


function SearchBar({ search, setSearch}) {
  
  const handleSearch = (event) => {
    
    setSearch(event.target.value);
   
  };
 
  return (

    
     
    <label>
      {" "}
      Search products
      <input type="text" value={search} onChange={handleSearch} />
    </label>
     
  );
}

export default SearchBar;