function SearchBar({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <label>
        Search Students:
        <input type="text" value={search} onChange={handleSearch} />
      </label>
    </div>
  );
}

export default SearchBar;
