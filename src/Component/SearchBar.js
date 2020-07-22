import React from 'react'

function SearchBar({ callback ,Stock} ) {
    return (
      <div>

        <input
          className="style-input"
          type="text"
          onChange={callback}
          placeholder="Search..."
        />
            <input
          type="checkbox"
          name="checkbox"
          onClick={Stock}
          
        ></input>
      </div>
    );
    }

export default SearchBar;
