import React from 'react'

function SearchBar(props) {

    const handleInputChange = (e) => {
        props.setQuery(e.target.value)
    }

    const handleCheckboxChange = (e) => {
        props.setCheckbox(e.target.checked)
    }

    return (
        <div>
            <input type="search" onChange={handleInputChange} />
            <div>
                <input type="checkbox" id="checkbox" onChange={handleCheckboxChange} />
                <label htmlFor="checkbox"> Only show products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar;