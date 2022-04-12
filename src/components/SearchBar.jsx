import { useState } from "react";

export default function SearchBar (props){

    const [searchBarData, setSearchBarData] = useState("");

    function handleSearch(event){
        const value = event.target.value;
        setSearchBarData(value)

        props.filterProducts(value);
    }

    return (
        <input className="searchbar" name="search-bar" value={searchBarData} type="search" onChange={handleSearch}/>
    )
}