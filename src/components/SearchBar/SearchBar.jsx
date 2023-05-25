import { useState } from 'react';


function SearchBar({ filterProducts }) {

    const [query, setQuery] = useState('');

    const handleQueryChange = e => {
        const inputValue = e.target.value
        setQuery(inputValue)
        filterProducts(inputValue)
    }

    return (
        <form className="SearchBar">
            <input type="text" placeholder="Introduce un producto..." value={query} onChange={handleQueryChange} />
        </form>
    )
}

export default SearchBar