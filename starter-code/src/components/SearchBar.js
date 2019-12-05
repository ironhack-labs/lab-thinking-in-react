import React from 'react'
import data from '../data.json'

const SearchBar = ({ search }) => {
    console.log(search)

    return (
        <>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Search</label>
                <input type="text" className="form-control" id="search" value onChange={(e) => search} />
            </div>
            <div className='form-group'>
                <label>Only show products on stock
                        <input name='stock' type='checkbox' className='form-control' />
                </label>
            </div>
        </>


    )

}

export default SearchBar
