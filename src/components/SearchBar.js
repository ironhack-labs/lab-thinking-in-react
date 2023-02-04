import React from "react";

function SearchBar (props) {
    const handleSearch = (event) => {
        console.log(event.target.value)
        const matchArray = props.products.filter(element => {
          return element.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        props.setMyFilteredArray(matchArray);
    }
    return(
        <div className="search">
          <input type="text" onChange={handleSearch} className="input-text"/>
          <div className="check">
            <input type="checkbox" />
            <p>Only show products in stock</p>
          </div>
        </div>    
    )
  }  
export default SearchBar;


  
  