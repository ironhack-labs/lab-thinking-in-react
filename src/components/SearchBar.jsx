import { useState } from "react"

function SearchBar(props) {
    return (
        <div className="searchBar">
            <p>Search</p>
            <input onChange={(e)=> {props.setSearch(e.target.value)}} id="search" name="search" placeholder="Search..." />
            <div>
                <input onChange={() => {
                    if(props.inStock === true) {
                        props.setInStock(false)
                    }
                    else {
                        props.setInStock(true)
                    }}} type="checkbox" id="inStock" name="inStock" />
                <label for="inStock">Only show products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar