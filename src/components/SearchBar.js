function SearchBar(props) {
  const handleSearchChange = (event) => {
    props.setQuery(event.target.value);
  };

  const handleInStockChange = (event) => {
    props.setInStock(event.target.checked);
  };

  return (
    <div>
      <p>Search</p>
      <input
        className="Input"
        type="text"
        value={props.query}
        placeholder="Search by name"
        name="input"
        onChange={handleSearchChange}
      />
      <br />
      <input
        className="Checkbox"
        type="checkbox"
        name="productInStock"
        checked={props.inStock}
        onChange={handleInStockChange}
      />
      Only show products in stock
    </div>
  );
}
export default SearchBar;
