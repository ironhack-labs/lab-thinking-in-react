import { useState } from "react";

export default function SearchBar (props){

    const [searchBarData, setSearchBarData] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    function handleSearch(event){
        const value = event.target.value;
        setSearchBarData(value)

        props.filterProducts(value, isChecked);
    }

    function handleChange(){
        console.log("BEFORE", isChecked)

        const checkbox = !isChecked;
        setIsChecked(checkbox);

        console.log("AFTER", checkbox)
        props.filterProducts(searchBarData, checkbox);
    }

    return (
        <div>
            <input className="searchbar" name="search-bar" value={searchBarData} type="search" onChange={handleSearch} />
            
            <input type="checkbox" name="check-box"  onChange={handleChange}/>
            <label htmlFor="check-box">Only show products in stock</label>
        </div>
    )
}