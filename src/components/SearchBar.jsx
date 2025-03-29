function SearchBar({
  searchText,
  onSearchChange,
  inStockOnly,
  onInStockChange,
}) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search</label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={onSearchChange}
      />
      <div className="stock-container">
        <input
          id="stock"
          name="stock"
          type="checkbox"
          checked={inStockOnly}
          onChange={onInStockChange}
        />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
