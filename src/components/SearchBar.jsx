import React from 'react';
import 'bulma/css/bulma.css';

const SearchBar = ({ searchChange, checkBox }) => {

  

  const handleSearchChange = ({target}) => 
    searchChange(target.value)

   const handleCheckBoxChange = ({target}) => {
     checkBox(target.checked)
    }

  return (
    <div className="SearchBar">
      <input
        className="input is-success"
        onChange={handleSearchChange}
        type="text"
        name="search"
        placeholder="Search Product"
      />
      <label className='checkbox' htmlFor="inStock">
      <input className='checkbox' type="checkbox" name="inStock" onChange={handleCheckBoxChange} />Only Show Available Products
      </label>
    </div>
  );
};

export default SearchBar;
