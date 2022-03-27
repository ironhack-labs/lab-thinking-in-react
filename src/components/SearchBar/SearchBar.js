import React from "react";
import { useState } from 'react';

function SearchBar({ filterByProduct }) {

    const [search, setSearch] = useState("")

    // documentacion para searchbars https://medium.com/geekculture/create-a-simple-search-component-in-react-js-using-react-hooks-710c1dfe8b58
    // https://www.iamtimsmith.com/blog/lets-build-a-search-bar-using-react-hooks

    function inputHandler(e){
        setSearch(e.target.value)
        filterByProduct(e.target.value)
    }

    return(
        <div>
            <form>
                <input className="input"
                type="text"
                name="search"
                placeholder="Product name"
                value={ search}
                onChange={ inputHandler }>
                </input>
            </form>

        </div>
    )
}


export default SearchBar