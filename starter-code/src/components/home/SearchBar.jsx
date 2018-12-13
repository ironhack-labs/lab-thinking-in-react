import React from 'react'

const SearchBar = ({searchFunc, onlyInStock}) =>{

return(
      <div>
        <input type="text" placeholder="Buscar" onChange={searchFunc()}/><br/>
        <input type="checkbox" onChange={onlyInStock()}/>
        <label>Desplegar solo productos disponibles</label>
      </div>
    ) 
}

export default SearchBar