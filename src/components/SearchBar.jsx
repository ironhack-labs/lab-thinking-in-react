function SearchBar(props) {
  function filterProducts() {
    alert('works');
  }

  return (
    <div className="search-bar">
      <div className="search-bar-input-container">
        <label htmlFor="search">Search</label>
        <input
          onChange={filterProducts}
          type="text"
          name="search"
          id="search"
        />
      </div>
      <div className="search-bar-checkbox-container">
        <label htmlFor="radio">Only show products in stock</label>
        <input type="checkbox" name="radio" id="radio" />
      </div>
    </div>
  );
}

export default SearchBar;
