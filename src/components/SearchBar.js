import React, { useState } from 'react';

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('');

  // Handler function to update the searchQuery state when the user types in the input field
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {/* Add any additional search bar UI elements or logic as needed */}
    </div>
  );

  }
  
  export default SearchBar