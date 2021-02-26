import React from 'react'

export default function SearchBar(props) {
    
    const handleChange = (event) => {
        console.log(event.target.value)
        props.setQuery(event.target.value)
    }

    return (
        <div>
            <p>Search</p>
            <input 
            type="text"
            name="query"
            //we will here send data to the class query
            // value={props.query}
            onChange={handleChange}
            />
        <div>
                <input 
                type="checkbox"
                name="checkbox"
                />
                <label htmlFor="checkbox">Only show products on stock</label>
            </div>
        </div>
    )
}
