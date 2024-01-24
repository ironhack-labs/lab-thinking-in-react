function SearchBar() {
  return (
    <div id="search-bar-component">
      <label htmlFor="searchBar" id="search-bar-label">
        Search
      </label>
      <input type="text" name="searchBar" id="search-bar-input" />

      <div id="checkbox-container">
        <input type="checkbox" name="checkBox" id="check-box" />
        <label htmlFor="checkBox" id="check-box-label">
          {' '}
          only show products in stock
        </label>
      </div>
    </div>
  );
}
export default SearchBar;
