import { useState } from "react";

export const SearchBar = (props) => {
  const { searchData } = props;
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>Search</label>
      <br/>
      <input
        onInput={(event) => {
          setInput(event.target.value);
          searchData(event.target.value, checked);
        }}
        type="text"
        placeholder="enter your search"
        value={input}
      />
      <br/>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
            searchData(input, event.target.checked);
          }}
        />        
        Only show products in stock
      </label>
    </div>
  );
};