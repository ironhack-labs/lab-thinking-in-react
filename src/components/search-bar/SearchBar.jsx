function SearchBar({search, check}) {


  return (
    <div className="container d-flex">
      <div className="input-group flex-column mt-3">
        <div className="form-outline">
          <h6 className="text-center">Search</h6>
          <input type="search" name="search-bar" className="form-control" onChange={search} />
        </div>
        <div className="my-3 form-check align-self-center">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={check}
          />
          <label className="form-check-label" for="checkProduct">
            Only show products in stock
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
