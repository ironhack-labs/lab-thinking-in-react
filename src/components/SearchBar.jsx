function SearchBar (props) {

    return (
        <div>
            <p>Search</p>
            <div>
                <input name="product-search" className="search-bar" placeholder="Search product" onChange={props.filterProductsByName} />
            </div>
            <div className="check-div">
                <input type="checkbox" id="stock" name="stock" onChange={props.filterStock} />
                <label className="stock-text" htmlFor="stock">Only show products in stock</label>
            </div>

        </div>
    )
}

export default SearchBar