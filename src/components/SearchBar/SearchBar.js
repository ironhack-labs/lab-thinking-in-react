import React from "react";

function SearchBar({onChange,query,onClick}){
    return(
        <form>
            <input
                type="text"
                onChange={onChange}
                value={query}
            />
            <label>Only show products on stock</label>
                <input type="checkbox" value="true" onChange={onClick}/>
        </form>
    )
}

export default SearchBar;