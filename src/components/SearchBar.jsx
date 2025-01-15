import { useEffect } from "react";

function SearchBar({ search, onSearch }) {

    useEffect(() => {
        document.getElementById("search").focus();
    }, []);

    return (
        <input
        id = "search"
        type="text"
        placeholder="Search"
        value = { search }
        onChange = {(event) => onSearch( event.target.value )} 
        />
    );
}

export default SearchBar;