/*
 * Search bar.
 */

import React from "react";

function SearchBar(props) {
  // Sends `userInput` to parent component `FilterableProductTable`.
  const changeHandler = (e) => {
    const userInput = e.target.value;
    props.onUserInput(userInput);
  };

  return (
    <div>
      <input onChange={changeHandler} type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
