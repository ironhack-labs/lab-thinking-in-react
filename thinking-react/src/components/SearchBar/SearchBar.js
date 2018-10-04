import React, { Component } from "react";

const SearchBar = (props) => {

  return (
    <div>
    <input type="text" placeholder="Search.."></input>
    <br/>
    <input type="checkbox" id="claws" name="feature"
               value="claws" />
        <label for="claws">Only Show Products in Stock</label>
    </div>
  );
};

export default SearchBar;