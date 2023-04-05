import { useState } from 'react';


function SearchBar (props) {
  
  return(
      <div>
        <label>Search  </label>
        <input type='text' placeholder='search...' onChange={props.checkProductsType}></input>
        <br></br>
        <label>Only products in stock  </label>
        <input type='checkbox'  onChange={props.inStockProduct}></input>
      </div>    
  )
}
export default SearchBar