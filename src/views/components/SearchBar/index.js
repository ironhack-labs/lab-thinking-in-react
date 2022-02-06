import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({setFilterProducts}) => {

  const handleChange = (e)=>{
    const {value, name} = e.target;
    console.log(value, name)
    setFilterProducts( filterProducts => filterProducts.filter(p => {
        return p.name.toLowerCase().includes(value.toLowerCase())
      }))
    
  }

  const handleCheck = (e) =>{
    const {value, name} = e.target;
    console.log(value, name)
  }


  return (
    <>
        <input  className="buscar" name="search" placeholder="Search" type="text" onChange={handleChange} />
        <label >Only show products in stock</label>
        <input type="checkbox" name="stock" id ="stock" onChange={handleCheck}/>
    </>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
