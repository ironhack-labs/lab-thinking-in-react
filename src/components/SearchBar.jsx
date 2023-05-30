
function SearchBar({ search, setSearch }) {
const handleSearch = (event) => {
    console.log('search works');
    setSearch(event.target.value);
    };

  return (
    <label>
      {" "}
      Search products
      <input type="text" value={search} onChange={handleSearch} />
    </label>
  )
}

export default SearchBar;