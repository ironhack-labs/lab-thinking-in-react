import React from 'react'; 

export default function SearchBar(props) {
    console.log("search props", props);
    const handleChange = event => {
        props.setQuery(event.target.value)
    }
    return (
        <div>
            <input 
            type="text"
            name="query"
            value={props.query}
            onChange={handleChange}
            />
        </div>
    )
}