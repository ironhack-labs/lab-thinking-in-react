import React, { useState } from 'react';


const SearchBar = (props) =>{
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    props.handleSearch(e.target.value)
  };

return (
  <>
  <div>
<label htmlFor="products">Search Products</label>
  <input type="text" value={searchTerm} onChange={handleSearch} ></input>
  </div>
    <div>

  <input type="checkbox" ></input>
  <label htmlFor="stock">Only show products in stock</label>
  </div>
  </>
)

}
export default SearchBar