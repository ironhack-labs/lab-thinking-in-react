// src/components/SearchBar.js
function SearchBar({
    searchQuery,
    onlyShowStocked,
    onSearchQueryChange,
    onOnlyShowStockedChange,
  }) {
    return (
      <form className="search-bar">
        <div className="search-label">
            <label htmlFor="search-input">Search</label>
        </div>
        
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={onSearchQueryChange}
        />

      </form>
    );
  }
  
  export default SearchBar;
  