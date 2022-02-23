//SearchBar.js

import {useState} from 'react';

function SearchBar(props) {
    const [searchTerm, setSearch]= useState('');

    const handleSearch = (e) => {
        props.filterProducts(e.target.value);

        setSearch(e.target.value)     ;
    }

    return (
        <div className="SearchProducts">
            <p>Search: </p>
            <input value={searchTerm} type="text" onChange={handleSearch} placeholder='Search by product name...'/>
        </div>
    );

}

export default SearchBar;




