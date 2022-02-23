import { useState } from "react";

function SearchBar(props){
    const { products, filterProducts } = props;
    const [ searchInput, setSearchInput ] = useState("");

    function handleInput(query){
        setSearchInput(query);
        filterProducts(query);
    }

    return (
        <div>
            <input 
            type="text"
            name="searchInput"
            value={searchInput}
            onChange={(e) => handleInput(e.target.value)} />
        </div>
    );
}

export default SearchBar;