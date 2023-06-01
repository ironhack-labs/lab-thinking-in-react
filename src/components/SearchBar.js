import React from 'react'

function SearchProducts({ handleSearch }) {

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        handleSearch(searchTerm);
      };
      
  return (
    <div>
        <input type="text" placeholder="Search..." onChange={handleInputChange}/>
    </div>
  )
}

export default SearchProducts