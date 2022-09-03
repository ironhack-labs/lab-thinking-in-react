import { useState } from "react";

function SearchBar(props) {

    return (
        <div>
            <label>
                Search
                <input className="searchBar" type="text" placeholder="Product" onChange={props.filter}/>
            </label>
            <label>
                <input id="checkbox" type="checkbox" value="instock" onChange={props.filter}/>
                Only show products in stock
            </label>
        </div>
    );
}

export default SearchBar;