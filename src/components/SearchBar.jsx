function SearchBar(props) {
  const handleSearchChange = (event) => {
    props.onSearch(event.target.value);
  };

  const handleInStockChange = (event) => {
    props.onInStockChange(event.target.checked);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={props.searchTerm}
        onChange={handleSearchChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />
        {' '}
        Only show products in stock
      </p>
    </div>
  );
}

export default SearchBar;
