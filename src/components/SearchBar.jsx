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
        <label htmlFor="search">Search</label>
        <input
          type="text"
          className="form form-control mb-3"
          value={search}
          onChange={handleChange}
        />
        <input type="checkbox" onChange={handleCheck} />
        <label className="text-primary">Only show products in stock</label>
      </form>
    </div>
  );
}

export default SearchBar;
