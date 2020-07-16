import React from 'react'

export default function SearchBar(props) {
    const handleChange = event => {
        props.setQuery(event.target.value)
    }
    return (
        <>
            <h5>Search</h5>
            <input
            type="text"
            name="query"
            id="query"
            value={props.query}
            onChange={handleChange}
            />
        </>
    )
}