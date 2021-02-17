import React from 'react';

function Search({ query, onChange }) {
    console.log("QUERY: ",onChange)
    return (
        <input 
            type="text"
            name="query"
            placeholder="search..."
            value={query}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default Search