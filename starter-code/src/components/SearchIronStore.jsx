import React from "react";

export default function SearchIronStore({clbk}) {
  
    return (
      <div>
          <input name="searchInput" onChange={(e) => clbk(e.target.value)} />
      </div>
    );
 
}