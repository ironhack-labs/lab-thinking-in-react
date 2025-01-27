function SearchBar({ onSearch, onInStockChange }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
        />
        <br />
        <input
          type="checkbox"
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        <label> Only show products in stock</label>
      </div>
    );
  }
  
  export default SearchBar;