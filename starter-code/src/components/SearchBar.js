import React from "react"

let SearchBar = ({onChangeSearch,onChangeStock}) => (
    <div>
        Search
        <input onChange={onChangeSearch} type="text" name="search"/>
        <input onChange={onChangeStock} type="checkbox" name="checkbox"/>
        Only show products on stock
    </div>
)

export default SearchBar 
