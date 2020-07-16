import React from 'react'

export default function SearchBar(props) {
    console.log(props)
    // const handleChange = event => {
    //     props.setQuery(event.target.value)
    // }

    const handleChange = e => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        props.setQuery(name,value)
      }

    return (
        <div>
        <div>
            <h5>Search</h5>
            <input 
                type = "text"
                name = "query"
                value = {props.state.query}
                onChange = {handleChange}
                size = "50"
            />
        </div>
        <div>
            <label htmlFor = "Only show products in stock">Only Show Products in stock</label>
            <input
                name="stocked"
                type="checkbox"
                checked={props.state.inStock}
                onChange={handleChange} />
        </div>        
        </div>
    )
}
