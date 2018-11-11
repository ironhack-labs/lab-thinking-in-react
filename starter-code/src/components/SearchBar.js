//onFilterItems =
import React from 'react';
//import ProductRow from './ProductRow'

const searchBar = (props) => {
// console.log("this is the start of PCR")
// console.log(props.data)
    
    function handleChange(e) {
        props.onFilterItems(e)
    }

    function handleCheck(e){
        props.onStockItems(e)
    }  

    return (
        <div className="">
            <input type="text" name="matchItems" onChange={(e) => handleChange(e)} placeholder="Search..."></input>
            <input type="checkbox" id="stock" name="stock" onChange={(e) => handleCheck(e)}></input>
            <label htmlFor="stock">Only show products in stock</label>
        </div>  
    )
}

export default searchBar;


