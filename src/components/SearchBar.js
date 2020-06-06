import React from 'react';



function SearchBar(props) {

  let searchHandler = (event) => {
    let inputValue = event.target.value
    props.searchHandler(inputValue) 
  }

  let checkboxHandler = (event) => {
 props.checkboxHandler(event.target.checked)
  }


  return (
      <div>
<form>
    <input placeholder="Search..." onChange={searchHandler} value={props.currentSearchTerm}></input>
    <button type="submit">Search</button> <br></br>
    <input type="checkbox" onChange={checkboxHandler} ></input> Only show products in stock
</form>
      </div>
   
   );
  }


export default SearchBar;