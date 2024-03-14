import React from 'react'
import { useState } from 'react'

function SearchBar({filterProducts}) {
    const [searchWords, setSearchWords]  = useState("")
    
    const handleChange = (e) =>{
        const newWord = e.target.value 
        setSearchWords(newWord)
        filterProducts(newWord)
    }
    
  return (
    <div>
        <input onChange={handleChange} placeholder="Search your items"/>
    </div>

  )
}

export default SearchBar