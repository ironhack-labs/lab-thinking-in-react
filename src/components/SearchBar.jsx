function SearchBar (props) {

    const {searchQuery, handleChange} = props

    return(
        <div>
            <div className="search-input">
                <input type="search" value={searchQuery} onChange={handleChange} placeholder="Search for a product"  />
            </div>
            <div className="stock-checkbox">
                <input type="checkbox" /> Only shows products in stock

            </div>
        </div>
    )
}

export default SearchBar;