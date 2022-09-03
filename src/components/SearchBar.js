import { useState } from "react";

function SearchBar(props) {

    return (
        <div>
            <label>
                Search
                <input type="text" placeholder="Product" onChange={props.filter}/>
            </label>
            <label>
                <input className="checkbox" type="checkbox" value="instock" onChange={props.filter}/>
                Only show products in stock
            </label>
        </div>
    );
}

export default SearchBar;