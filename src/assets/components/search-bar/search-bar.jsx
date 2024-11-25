import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSeacrh] = useState("");
  const [inStock, setInStock] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log(event);
    setSeacrh(value);
    onSearch(value, inStock);
  };

  const handelStockChange = (event) => {
    const isChecked = event.target.checked;
    setInStock(isChecked);
    onSearch(search, isChecked);
  };

  return (
    <>
      <div>Search Bar</div>
      <div className="search-bar my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
      </div>

      <div className="input-group mb-3 d-flex gap-2 mt-3">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            onChange={handelStockChange}
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
        <div>Only Show Products in stock</div>
      </div>
    </>
  );
}

export default SearchBar;
