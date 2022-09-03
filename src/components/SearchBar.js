import { useState } from "react";

function SearchBar({ data }) {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <div>
      <form>
        <h5>Search</h5>
        <input
          value={searchProduct}
          name="searchProduct"
          onChange={(event) => setSearchProduct((event.target.value))}
          className="form-control"
          type="search"
          placeholder="Search..."
        />
        <label><input type="checkbox" value="first_checkbox" /> Only show products in stock</label>
      </form>
    </div>
  );
}

export default SearchBar;
