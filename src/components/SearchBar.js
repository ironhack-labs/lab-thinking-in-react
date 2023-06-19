function SearchBar() {
  return (
    <div>
      <h3>Search</h3>
      <input type="text" name="search" />
      <input type="checkbox" name="stock" />
      <label for="stock">Only show products in stock</label>
    </div>
  );
}
export default SearchBar;
