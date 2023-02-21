function SearchBar() {

    return (
        <div>
            <p>Search</p>
            <input type="text" placeholder="Search.." />
            <input type="checkbox" id="search-bar"></input>
            <label for="search-bar">Only show products in stock</label>
        </div>
    )
}

export default SearchBar;