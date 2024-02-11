import { useState } from "react";

export const SearchBar = (props) => {
  const { searchData } = props;
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>Search:</label>
      <input
        onInput={(event) => {
          setInput(event.target.value);
          searchData(event.target.value, checked);
        }}
        type="text"
        placeholder="enter your search"
        value={input}
      />
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
            searchData(input, event.target.checked);
          }}
        />
        In stock:
      </label>
    </div>
  );
};
