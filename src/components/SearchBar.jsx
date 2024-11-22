function SearchBar({ search, setSearch, stock, setStock }) {

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleStockChange = () => {
    setStock(!stock);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* Search Bar */}
        <input
          value={search}
          onChange={handleSearchChange}
          id="search"
          type="text"
          placeholder="Search product"
          className="form-control mb-3"
        />

        {/* CheckBox */}
        <div className="d-flex flex-fill justify-content-center mb-1">
          <input
            checked={stock}
            onChange={handleStockChange}
            type="checkbox"
            id="inStock"
          />
          <label className="px-2" htmlFor="inStock">
            Only show products in Stock
          </label>
        </div>
      </div>
    </nav>
  );
}

export default SearchBar;
