import React from 'react'

export default function SearchBar ({clbk}) {
 
    return ( 
        <div>
            <label>Search</label>
            <input type="text" name="name" onChange={clbk} ></input>
        </div> )
    
}
