
import React from 'react';

function SearchBar(props) {
  return (
    <div>
     <label>Search</label>
     <input
       type="text"
       placeholder="Search..."
       value={props.search}
       onChange={props.onChange}
         
     />
    </div>
  );
}

export default SearchBar;











