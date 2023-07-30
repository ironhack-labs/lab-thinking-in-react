const SearchBar = ({ onSearch, inStock }) => {
  return (
    <div>
      <h2>Search</h2>
      <form>
      <div>
        <input className="input-text" type="text" onChange={(event) => onSearch(event.target.value)} />
        </div>
        <div className="check">
        <input
          type="checkbox"
          onChange={(event) => inStock(event.target.checked)}
        />
        <p>Show only products in stock</p>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
