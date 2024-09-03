function SearchBar({ searchText, onSearchChange, inStockOnly, onInStockChange }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={onSearchChange}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={onInStockChange}
          />{" "}
          Only show products in stock
        </p>
      </div>
    );
  }
  
  export default SearchBar;
  