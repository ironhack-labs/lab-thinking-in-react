import React from 'react'

export default function SearchBar({handleChange}) {
    return (
        <div onChange={handleChange}>
            <input className="input is-focused is-normal is-rounded" type="search" name="" id="" placeholder="Find your products"/>
            <br></br>
            <label className="checkbox wide" htmlFor="checkbox">
            <input type="checkbox" name="checkbox" id="chackbox"/>
            Only show products in stock</label>
        </div>
        
    )
}
