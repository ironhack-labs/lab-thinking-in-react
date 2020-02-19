import React from 'react'

export default function SearchBar({clbkSearch, clbkStock}) {
    return (
        <div>
            <h2>Search</h2>
            <input onChange={(e)=> (
                clbkSearch(e.target.value)
            )}></input>
            <input type="checkbox" onClick={()=>clbkStock()}></input>
            <label>Only show Products in Stock</label>
        </div>
    )
}
