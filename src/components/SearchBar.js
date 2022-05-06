import React from 'react'

function SearchBar (props) {

    const handleInputChange = event => {
	props.setQuery(event.target.value)
	}
    const handleCheckboxChange = event => {
    props.setChecked(!props.checked)
    }

    return (
    <div className='searchSection'>
        <p>Search</p>
        <input className='searchField' type="text" onChange={handleInputChange}/>
        <div>
        <input type="checkbox" id="inStock" name="inStock" onChange={handleCheckboxChange}/>
        <label htmlFor="inStock">Only show products in stock</label>
        </div>
    </div>
    )
}



export default SearchBar;



