function SearchBar({ onSearch }) {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    // trigger onSearch on parent
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <div className="form-control">
        <label htmlFor="">Search</label>
        <input type="text" onChange={handleSearchChange} />
        <div className="checkbox">
          <span>
            <input type="checkbox"/>
            <span className="check-text">Only show products in stock</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
