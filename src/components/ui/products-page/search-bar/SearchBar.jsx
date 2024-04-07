function SearchBar({ search, check }) {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text">Search</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>
      {/* checked has a value of  true or false */}
      <div className="input-group mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
          onChange={(e) => {
            check(e.target.checked);
          }}
        />
        <span className="px-2">Only show the products in stock</span>
      </div>
    </>
  );
}

export default SearchBar;
