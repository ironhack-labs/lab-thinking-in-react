import React from "react"

const SearchBar = (props) => {
    return(
        <form>
            <input placeholder="Search" name="searchBar" onChange={(e) => {props.handleSearch(e)}}></input><br />
            <label><input type="checkbox" name="checkbox" onClick={() => {props.toggle()}} />Only show products in stock</label>
        </form>
    )
}

export default SearchBar;