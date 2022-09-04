function SearchBar({ search, setSearch, stockFilter, setStockFilter }) {
  return (
    <div>
      <h5>Search</h5>
      <div className="mb-2">
        <input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="form-control"
          type="text"
        />
      </div>
      <div className="form-check">
        <label>
          <input
            checked={stockFilter}
            type="checkbox"
            className="form-check-input"
            onChange={(event) => {
              setStockFilter(event.target.checked);
            }}
          />
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
