import React from "react";

export const SearchBar = () => {
  return (
    <section className="section">
      <div className="container" id="SearchBar">
        <input className="input" type="text" placeholder="Search products..." />

        <label className="checkbox">
          <input type="checkbox" />
          Only show products in stock
        </label>
      </div>
    </section>
  );
};
