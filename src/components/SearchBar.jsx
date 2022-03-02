import React from 'react'

export default function SearchBar(props) {
    const handleInputChange = event => {
		// update the state in App.js
		props.setQueryProp(event.target.value)
    }
  return (
    <div>
        <input type="search" onChange={handleInputChange} />
    </div>
  )

  }