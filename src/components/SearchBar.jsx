function SearchBar({ search, setSearch, inStock, setInStock }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                />
                Only show products in stock
            </label>
        </div>
    );
}

export default SearchBar;
