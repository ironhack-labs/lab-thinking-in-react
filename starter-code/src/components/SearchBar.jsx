import React from 'react'

export default function SearchBar({filterItem}) {
    return (
        <div className="searchBar">
            Search
            <form onChange={e => filterItem(e.target)}>
                <input className="textInput" name="text" type="text" />
            
                <div className="checkbox">
                    <input name="checkbox" type="checkbox"/>
                    <p>Only show products on stock</p>
                </div>

            </form>
            
        </div>
    )
}
