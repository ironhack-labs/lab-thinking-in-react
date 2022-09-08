function SearchBar({ search, setSearch, stock, setStock }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleCheck() {
    setStock(!stock);
  }

  return (
    <div className="search-container">
      <h3>Search</h3>
      <input
        value={search}
        onChange={handleChange}
        type="search"
        className="search-input"
      />
      <input onChange={handleCheck} type="checkbox" id="stock" />
      <label htmlFor="stock"> Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
