import React from 'react'

export default function SearchBar({search, setSearch}) {


    const handleChange = ({target}) => setSearch( filterValue => {
        if (target.type === 'checkbox') {
            return {...filterValue, [target.name]: target.checked}
        }
        return {...filterValue, [target.name]: target.value}
    })

    return (
        <div className="searchbar">
            <h4>Search</h4>
            <input 
                type="text" 
                placeholder="Search any product..."
                onChange={handleChange}
                value={search.name}
                name="name"
                id="search-bar"
                />
            <label htmlFor="checkbox">
                <input 
                    type="checkbox" 
                    name="onStock"
                    onChange={handleChange}
                    />
                Only show products on stock
            </label>
        </div>
    )
}