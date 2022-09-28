const SearchBar = (props) => {
  return (
    <div>
      <p>Search</p>
      <input
        className="search-field"
        type="text"
        onChange={(e) => props.searchProduct(e.target.value)}
      ></input>
      <input
        type="checkbox"
        id="inStock"
        name="inStock"
        onChange={(e) => props.toggleInStock(e.target.value)}
      ></input>
      <label htmlFor="inStock">Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
