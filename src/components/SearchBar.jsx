/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchBar({ handleSearch }) {
  const [userInput, setUserInput] = useState({ keyWord: "", inStock: false });

  const handleChange = (e) => {
    const { name, checked, type, value } = e.target;
    const input = type === "checkbox" ? checked : value;

    const newInput = { ...userInput, [name]: input };
    setUserInput(newInput);
    handleSearch(newInput);
  };

  return (
    <div className="search-bar">
      <input
        className="form-control mb-2"
        type="text"
        name="keyWord"
        id="keyWord"
        value={userInput.keyWord}
        placeholder="Search..."
        onChange={handleChange}
      />
      <input
        className="form-check-input mb-5"
        type="checkbox"
        name="inStock"
        id="inStock"
        value={userInput.inStock}
        onChange={handleChange}
      />
      <label>Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
