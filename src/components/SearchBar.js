import React, { useState } from 'react';

function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
        props.handleSearch(event.target.value);
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <label htmlFor=''>Search Products</label>
            </div>
            <input type="text" style={{ width: '750px'}} value={searchTerm} onChange={handleSearch} />
        </div>
    );
}

export default SearchBar;