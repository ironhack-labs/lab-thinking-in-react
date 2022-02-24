import { useState } from 'react';

function SearchBar (props) {
    

    const searchHandler = event => {
        props.setSearchProp(event.target.value)
    }

    const checkHandler = event => {
        props.setCheckedProp(event.target.checked)
    }


    return(

        <div>
          
          <form>
              <input type='search' onChange={searchHandler}/> 
              <input type='checkbox' onChange={checkHandler}/>
              <label>Only show products in stock</label> 
          </form>
        </div>    
    )
  }
  
  export default SearchBar;