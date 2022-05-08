import React, { useState } from 'react';

function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
        props.handleSearch(event.target.value);
    }

    return(
        <div>
            <label htmlFor=''>Search Products</label>
            <input type="text"  value={searchTerm} onChange={handleSearch} />
        </div>
    );
}

export default SearchBar;