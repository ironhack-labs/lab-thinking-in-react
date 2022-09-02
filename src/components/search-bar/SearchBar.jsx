function SearchBar() {
  return (
    <div className="container d-flex">
      <div className="input-group flex-column mt-3">
        <div className="form-outline">
          <h6 className="text-center">Search</h6>
          <input type="search" name="search-bar" className="form-control" />
        </div>
        <div className="my-3 form-check align-self-center">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Only show products in stock
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
