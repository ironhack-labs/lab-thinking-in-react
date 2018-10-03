import React from "react";

const SearchBar = prop => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Search..." onChange={e => prop.search(e.target.value)} />
        <p>
          <input type="checkbox" onChange={e => prop.checkBox()}/>{" "}
          Only show products in stock
        </p>
      </form>
    </div>
  );
};

export default SearchBar;
