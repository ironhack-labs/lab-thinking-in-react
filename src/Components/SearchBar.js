function SearchBar() {
  return (
    <div>
      <p>Search</p>
      <div>
        <input type="search" id="query" name="q" placeholder="Search..."></input>
      </div>
      <div>
        <input type="checkbox"></input>
        <p>Only show products in stock</p>
      </div>
    </div>
  );
}

export default SearchBar;
