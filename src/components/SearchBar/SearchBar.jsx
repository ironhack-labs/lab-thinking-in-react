import React from 'react'

export default function SearchBar(props) {
    return (
        <div ><p></p>
           <input onChange={(e) => props.inputSearchHandler(e.target.value)}  value={props.searchValue}/>
       <p></p>

       Only show products in stock
        <input type='checkbox' onChange={(e) => props.inputHandler(e)} value={props.checkboxValue}></input>
        
        </div>
    )
}
