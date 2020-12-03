import React from 'react'

const SearchBar = ({data }) => {


    return (
        <div className="searchbar">
            <h3>Search</h3>
            <form>
                
                <input type="text" name="name" />
                <br /><br />

                <label>Only Show Products on Stock</label><br />
                <input type="checkbox" name="stocked" />
                <br /><br />
               
                
            </form>
        </div>)
}

export default SearchBar