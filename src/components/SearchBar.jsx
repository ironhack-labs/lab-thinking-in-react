function SearchBar({ handleSearch, search, handleChecked, checked }) {

    return (
        <div>
            <p>Search for a product</p>
            <input type="text" onChange={handleSearch} value={search} placeholder="Search.." />
            <input type="checkbox" onChange={handleChecked} id="search-bar"></input>
            <label for="search-bar">Only show products in stock</label>
        </div>
    )
}

export default SearchBar;