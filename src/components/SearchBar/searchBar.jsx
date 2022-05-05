import { useState, useEffect } from 'react'
import productData from '../../data.json'



function SearchBar({filterBySearch }) {

    const [searchByWord, setSearchByWord] = useState(' ')

    const handleSearch = e => {
        setSearchByWord(e.target.value)
        filterBySearch(e.target.value)
    }

    return (
        <div>
            <form >
                <label>
                    <input type="text" value={searchByWord} onChange={handleSearch} />
                </label>
            </form>
        </div>
    )
}

export default SearchBar