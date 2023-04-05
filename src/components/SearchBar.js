const SearchBar = ({ search, onSearch, onCheck }) => {
  return (
    <form className="search-bar" action="">
      <label htmlFor="bar">Search</label>
      <input type="text" value={search} onChange={onSearch} id="bar" />

      <div className="check">
        <input
          type="checkbox"
          name="Only show products in stock"
          id="stock"
          onChange={onCheck}
        />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </form>
  );
};

export default SearchBar;
