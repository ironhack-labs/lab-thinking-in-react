function SearchBar(props) {
  return (
    <div className="searchBar-container">
      <label className="searchInput">
        Search Products
        <input
          type="text"
          name="search"
          value={props.search}
          onChange={props.searchInput}
          placeholder="Search..."
        />
      </label>

      <label className="stockInput">
        <input
          type="checkbox"
          name="inStock"
          checked={props.inStock}
          onChange={props.stockInput}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
