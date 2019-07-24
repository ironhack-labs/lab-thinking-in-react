import React from 'react'

export default function Searchbar(props) {
    return (
        <div>
            <input type='text' placeholder='Search for product' onChange={props.search}/>
            <label>Only show products in stock</label>
            <input type="checkbox" onChange={props.instock}/>
        </div>
    )
}

