import React from "react";

export const SearchBar = ({ children, func }) => {
  return (
    <div className="searchbar">
      <input value={children} onChange={e => func[0](e)} />
      <div className="checkboxdiv">
        <label >Show only in Stock</label>
        <input
          type="checkbox"
          onClick={e => {
            func[1](e);
          }}
        />
      </div>
    </div>
  );
};
