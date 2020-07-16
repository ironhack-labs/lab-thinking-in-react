import React from 'react'; 

export default function SearchBar(props) {
    const handleChange = event => {
        props.setQuery(event.target.value)
    }
    const toggleCheckbox = event => {
        props.checked(event.target.value)
    }
    return (
        <div>
            <input 
            type="text"
            name="query"
            value={props.query}
            onChange={handleChange}
            />
            <label> Only show the products on stock
            <input
            name="checked"
            type="checkbox"
            checked={props.checked}
            onChange={toggleCheckbox}/>
            </label>
        </div>
    )
}