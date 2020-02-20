import React from 'react'

export default function SearchBar({filterItem, availItem}) {
    return (
        <div className="searchBar">
            Search
            <form onChange={e => filterItem(e.target.value)}>
                <input className="textInput" type="text" />

            </form>

            
            <div className="checkbox">
                <input type="checkbox"/>
                <p>Only show products on stock</p>
            </div>
            
        </div>
    )
}
