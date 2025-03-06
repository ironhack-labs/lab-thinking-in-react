import "./SearchBar.css";

function SearchBar({ searchProduct, iniValue, displayStock, checkValue }) {
  console.log("Values:", iniValue);
  return (
    <div className="search-container">
      <input
        value={iniValue}
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={searchProduct}
      />
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="in-stock"
          onChange={displayStock}
          checked={checkValue}
        />
        <label htmlFor="in-stock">Show only products in stock</label>
      </div>
    </div>
  );

}

export default SearchBar;
