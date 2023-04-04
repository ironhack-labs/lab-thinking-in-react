const SearchBar = ({ search, onSearch }) => {
  return (
    <div className="search-bar">
      <form action="">
        <label htmlFor="">Search</label>
        <input type="text" value={search} onChange={onSearch} />

        <label htmlFor="">Only show products in stock</label>
        <input type="checkbox" name="Only show products in stock" id="stock" />
      </form>
    </div>
  );
};

export default SearchBar;
