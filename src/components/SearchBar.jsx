function SearchBar({ products }) {
  return (
    <div className="search">
      <label>
        Search <br />
        <input type="text" name="" id="search" />
      </label>
      <label>
        <input type="checkbox" name="" id="" />
        Only show products in stock
      </label>
      <p>{products.length} product(s) founded.</p>
    </div>
  );
}

export default SearchBar;
