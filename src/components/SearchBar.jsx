import React from 'react'
import jsondata from '../data.json'

function SearchBar(){
    return <div className="searchBar">
                <button className="search" >Search</button>
                <input type="text" className="search"/>
                <span className="search">Only show products on stock</span>
            </div>

}

export default SearchBar;