function SearchBar({ filterProductsSearch, filterProductsStocked }) {
  return (
    <form className="SearchBar">
      <label>
        Search
        <input
          type="text"
          id="searchedText"
          name="searchedText"
          onChange={(e) => filterProductsSearch(e.target.value)}
        />
      </label>

      <label>
        <input
          type="checkbox"
          id="onlyStocked"
          name="onlyStocked"
          onChange={(e) => filterProductsStocked(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
