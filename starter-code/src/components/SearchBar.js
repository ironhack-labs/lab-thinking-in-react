import React from 'react'

export default function SearchBar(props) {

    let handleChange = (e)=>{
        let enteredText=e.target.value
        props.filterProduct(enteredText)     
    }


    return (
        <div className="column search-bar">
            <input type="text" onChange={handleChange} placeholder="Search..." />
        </div>
    )
}

