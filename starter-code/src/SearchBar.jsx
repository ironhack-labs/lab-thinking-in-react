import React from 'react'

export default function SearchBar({ clbk }) {
    return (
        <div>
            <label htmlFor="search">Search</label>
            <input className="input-search" id="search" type="text" name="search" />
        </div>
    )
}
