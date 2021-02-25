import React from 'react'



export default function SearchBar(props) {
  
    
    return (
        <div>
            <p>Search</p>
            <input
                    type="text"
                    name="query"
                    
            />
            <br/>
            <input type="checkbox" name="checked"/>
            <label htmlFor="checked">Only show products in stock</label>
        </div>
    )
}
