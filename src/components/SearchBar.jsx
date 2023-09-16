function SearchBar({ products, search, setSearch, isInStock, setIsInStock }) {
  return (
    <div className="search">
      <label>
        Search <br />
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="isInStock"
          onChange={(e) => {
            setIsInStock(!isInStock);
          }}
        />
        Only show products in stock
      </label>
      <p>{products.length} product(s) founded.</p>
    </div>
  );
}

export default SearchBar;
