import React from 'react'

const SearchBar = ({handleChange}) => {
    return (
        <div>
            <h1>IronStore</h1>
            <label>Search</label><br/>
            <input name='product' placeholder='search a product' onChange={(e)=> handleChange(e)} /><br/>
            <input type='checkbox' />
        </div>
    )
}

export default SearchBar
