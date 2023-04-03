function SearchBar({ inputProduct, onInputProduct, stockCheck, onStockCheck }) {
  const handleSearch = (event) => {
    onInputProduct(event.target.value);
  };

  const handleStockCheck = (event) => {
    onStockCheck(event.target.value);
  };

  return (
    <div>
      <form>
        <div className="input-group filters">
          <span className="input-group-text"></span>
          <input
            type="text"
            className="form-control description-input"
            onChange={handleSearch}
            value={inputProduct}
            id="search"
            name="search"
            placeholder="Search"
          ></input>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="stock"
            value={stockCheck}
            id="inStock"
            onChange={handleStockCheck}
          />
          <label className="form-check-label" htmlFor="stock">
            Only show products in stock
          </label>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
