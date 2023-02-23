import { useState } from "react"

function SearchBar({ query, setQuery, check, setCheck }) {

    const changeInput = event => {
        setQuery(event.target.value)
    }

    const isChecked = event => {
        setCheck(event.target.checked)
    }
    console.log(check)
    return(
       <div>
        <p>Search</p>
        <input type="text" name="" id="" value={query} onChange={changeInput}/>
        <br/>
        <label>
        <input type="checkbox" onChange={isChecked}/></label>
        only show products in stock
       </div>
    )
}

export default SearchBar