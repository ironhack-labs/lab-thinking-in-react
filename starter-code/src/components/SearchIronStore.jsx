import React from "react";

export default function SearchIronStore({clbk, clbk2}) {
  
    return (
      <div>
          <input type="text" name="searchInput" onChange={(e) => clbk(e.target.value)} />
          <label>Ne pas affiché ceux qui ne sont pas en stock</label><input type="checkbox" name="stockedInput" onChange={(e) => clbk2(e.target.value)} />
      </div>
    );
 
}