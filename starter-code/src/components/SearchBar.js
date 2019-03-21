import React from "react"

const SearchBar = (props) => {

    return (
        <form>
            <input type="search" value={props.searchValue} onChange={(e) => props.searchProduct(e)}></input><br /><br />            
            <label><input name="inStock" type="checkbox" onChange={(e) => props.filterProduct(e,props.searchValue)} />Only show products on stock</label> <br />

        </form>
    )
}

export default SearchBar