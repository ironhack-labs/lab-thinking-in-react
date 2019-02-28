import React from "react"

let SearchBar = ({onChangeSearch,onChangeStock}) => (
    <div>
        <h2>Search</h2>
        <input onChange={onChangeSearch} type="text" name="search"/>
        <input onChange={onChangeStock} type="checkbox" name="checkbox"/>
    </div>
)

export default SearchBar