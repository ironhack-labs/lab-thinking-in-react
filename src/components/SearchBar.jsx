import React from "react";
import { useState } from "react";

function SearchBar({ searchProduct }) {
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false)

    const handleInput = (e) => {
      setInput(e.target.value);
      searchProduct(e.target.value, isChecked)

    };

    const handleChecked = (e) => {

      setIsChecked(e.target.checked);
      searchProduct (input, e.target.checked)
      
    }

  return <div>
    <h3>SearchBar </h3>
    <form> 
      <label> 
<input value={input} type="text" placeholder="search Product" onChange={handleInput}></input>
</label>
<label> 
<input value={isChecked} type="checkbox" checked={isChecked}  onChange={handleChecked}></input>
Only show products in stock
</label>
</form>
  </div>;
}

export default SearchBar;
