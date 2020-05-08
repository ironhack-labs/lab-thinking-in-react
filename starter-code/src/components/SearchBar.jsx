import React from 'react'




const SearchBar = ({clbk, checked}) => {

    return (
        <div>

<h2>Search</h2>
        <input
          className="style-input"
          type="text"
          onChange={clbk}
          placeholder="Search..."
        />
        <div>
        <input type="checkbox" name="checkbox" onChange={checked} />
        <label>Only show products in stock</label>
        </div>
            
        </div>
    )
}

export default SearchBar;
