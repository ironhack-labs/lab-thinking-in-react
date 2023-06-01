function SearchBar () {
    return(
        <div>
            <div className="search-input">
                <input type="text" name="name" placeholder="Search for a product" />
            </div>
            <div className="stock-checkbox">
                <input type="checkbox" /> Only shows products in stock

            </div>
        </div>
    )
}

export default SearchBar;