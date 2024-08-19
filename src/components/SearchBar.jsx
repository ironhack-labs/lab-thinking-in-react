// eslint-disable-next-line react/prop-types
function SearchBar({ filterProductsSearch, filterProductsStocked }) {
    return (
        <form className="SearchBar">
            <label>
                Search
                <input
          type="text"
          id="searchedText"
          name="searchedText"
          onChange={(element) => filterProductsSearch(element.target.value)}
        />
      </label>
      <label>
        <input
          type="checkbox"
          id="onlyStocked"
          name="onlyStocked"
          onChange={(element) => filterProductsStocked(element.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;