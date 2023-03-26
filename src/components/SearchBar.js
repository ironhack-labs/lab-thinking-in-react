import React from 'react'

function SearchBar({ search, onSearch, onCheck }) {
    const handleChange = (ev) => {
        onSearch(ev)
    }

    const handleCheck = (ev) => {
        onCheck(ev)
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Search'
                value={search}
                onChange={(e) => { handleChange(e.target.value) }}
            />

            <div>See only products in Stock<input type="checkbox" onChange={(e) => handleCheck(e.target.checked)} /></div>
        </div>
    )
}

export default SearchBar