import React from 'react';

export default function SearchBar({ searchInput, onChange }) {
  const handleChange = (event) => {
    //event.preventDefault();
    onChange((old) => {
        if (event.target.name==="inStock")
            return { ...old, [event.target.name]: event.target.checked };
        else
          return { ...old, [event.target.name]: event.target.value };
    });
  };

  return (
    <div>
      
      <form>
        <label>Search {" "}
          <input
            name="search"
            value={searchInput.search}
            onChange={handleChange}
            placeholder={'Search...'}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="inStock"
            title="Only products in stock"
            checked={searchInput.inStock}
            onChange={handleChange}
            placeholder={'Todo Description'}
          />
          Only products in stock
        </label>
      </form>
    </div>
  );
}
