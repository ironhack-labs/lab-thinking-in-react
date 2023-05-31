function SearchBar({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <form>
      <input
        type="text"
        placeHolder="search"
        value={search}
        onChange={handleSearch}
      />
      <input id="check-available" type="checkbox" />
      <label for="check-available">search available products only</label>
    </form>
  );
}

export default SearchBar;
