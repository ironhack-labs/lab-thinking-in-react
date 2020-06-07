import React, { Component } from 'react';


function SearchBar (props){

    let searchHandler = (event) => {
        let inputValue = event.target.value
        props.onSearchCallBack(inputValue)
    }

    let filterInStockHandler = (event) => {
        let checked = event.target.checked
        console.log(checked)
        props.onCheckedCallBack(checked)

    }

        return(
            <div>
                Search
                <br></br>
                <input type="text" onChange={searchHandler} value={props.currentSearchTerm}></input> <br />
                <input type="checkbox" id="onStock" onChange={filterInStockHandler}/> <label for="onStock">Only show products on stock</label>

            </div>
        )
    
}


export default SearchBar