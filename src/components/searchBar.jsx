function SearchBar({ search, handleSearch, inStockOnly, handleInStock }) {
    return (
        <form  style={{ marginBottom: "10px" }} >
            <p>Search</p>

            <div style={{ marginBottom: "10px" }}>
                <input type="text" placeholder="Search..." value={search} onChange={handleSearch} />
            </div>

            <label> 
                <input type="checkbox" name="stock" checked={inStockOnly} onChange={handleInStock} />
                <span>Only show products in stock</span>
            </label>
        </form>
    );
}
export default SearchBar;