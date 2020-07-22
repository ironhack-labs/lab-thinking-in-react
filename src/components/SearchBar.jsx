import React from 'react'


const SearchBar = props => {
    const search = ({target}) => {
           console.log(target.value)
           props.searchProduct(target.value)
    }
    return (
        <div className='search-bar'>
            <label htmlFor="name">Search</label>
            <br/>
            <input type="text" name="name" onChange={event => search(event)}/>
            <br/>
            <div>
            <input type="checkbox" name="stocked" onChange={() => props.showInStock()}/>
            <label htmlFor="stocked">Show only products in stock</label>
            </div>
        </div>
    )
}


export default SearchBar
