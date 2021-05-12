import React from 'react';
import 'bulma/css/bulma.css';

const SearchBar = ({ searchTerm }) => {

  const searchHandler = (e) => {
    searchTerm(e.target.value)
  };

    return (

<form className="box" style={{marginTop:'2%'}}>
  
  <div className="field">
    
    <label className="label" >Search</label>
    
    <div className="control"> 
      <input className="input" 
      type="search" 
      placeholder="search..."
      onChange={searchHandler}
      />
    </div>
    
    <label className="checkbox">
  <input 
  type="checkbox"
 

  />
  Only show products on stock
</label>
  </div>

</form>

    )
}

export default SearchBar;