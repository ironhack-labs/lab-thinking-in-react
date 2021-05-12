import React from 'react'

const SearchBar = ({ searchTerm}) => {

  const searchHandler = (e) => {
    searchTerm(e.target.value)
  };

  

    return (

<form className="box" style={{marginTop:'2%'}}>
  
  <div className="field">
    
    <label htmlFor='search' className="label" >Search</label>
    
    <div className="control"> 
      <input className="input" 
      type="search" 
      name= 'search'
      placeholder="search..."
      onChange={searchHandler}
      />
    </div>
    
    <label htmlFor='stock' className="checkbox">
  <input 
  type="checkbox"
  name = 'stock'

  />
  Only show products on stock
</label>
  </div>

</form>

    )
}

export default SearchBar;