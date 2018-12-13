import React from 'react'

const SearchBar = ({searchFun, inStock}) =>{

    return(
        <div>
            <input placeholder="Filtra" onChange={searchFun()}></input>
            <input type="checkbox" onChange={inStock}></input>
        </div>
    )
}

export default SearchBar