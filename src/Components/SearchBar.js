import React from 'react'

export default function SearchBar(props) {
    const handleChange = event => {
        props.setQuery(event.target.value)
    }

    const inStock = () => {
        props.filterStock()
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
            <label htmlFor="stock">Only show items in stock</label>
            <input
            type="checkbox"
            name="stock"
            id="stock"
            checked={props.stock}
            onChange={inStock}
          />
        </>
    )
}