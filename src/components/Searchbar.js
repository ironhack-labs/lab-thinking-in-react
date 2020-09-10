import React from 'react';

function SearchBar (props) {

    let searchHandler = (event) => {
    let inputValue = event.target.value
      
    props.onSearchCallback(inputValue) // lifting the state up ..
    }

    let checkboxHandler = (event) => {
        let inputValue = event.target.checked;
        props.onStockCallback(inputValue)
    }

    
    return(
        <div>
        <h1>Search</h1>
    <input placeholder="Search ..." onChange={searchHandler} value={props.currentSearchTerm}></input>
    
    <input type="checkbox" onChange={checkboxHandler} name="stock" checked={props.stockFilter}/><label>Only show products in stock</label>

    </div>
    
)
}

export default SearchBar