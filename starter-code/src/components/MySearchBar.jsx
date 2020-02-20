import React from 'react'
import './../styles/MySearchBar.css'

export default function MySearchBar({handleChange}) {
    return (
        <div>
            <h3>Search</h3>
            <input
                className="search"
                type="text"
                onChange={handleChange}
            />
        </div>
    )
}
