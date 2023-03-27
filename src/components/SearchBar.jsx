function SearchBar({ search, onSearch, inStock }) {
  const handleChange = (ev) => {
    onSearch(ev.target.value);
  };

  const handleCheck = (event) => {
    inStock(event.target.checked);
  };

  return (
    <div>
      <form>
        <div class="input-group mb-3 input-group-lg">
          <span class="input-group-text">Search</span>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="text-center fs-5 mb-4 text-primary form-check form-switch d-flex justify-content-center">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleCheck}
          />
          <label className="form-check-label ms-3">
            Only show products in stock
          </label>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
