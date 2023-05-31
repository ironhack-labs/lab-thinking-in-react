function SearchBar (props) {

    return (
        <div>
            <p>Search</p>
            <div>
                <input name="product-search" placeholder="Search product" onChange={props.filterProductsByName} />
            </div>
            <div>
                <input type="checkbox" id="stock" name="stock" onChange={props.filterStock} />
                <label htmlFor="stock">Only show products in stock</label>
            </div>

        </div>
    )
}

export default SearchBar