function SearchBar({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="search-bar">
      <label>
        {' '}
        Search products: 
        <input type="text" value={search} onChange={handleSearch} />
      </label>
    </div>
  );
}

export default SearchBar;
