import React from 'react'

const SearchBar = props => {
    
    const handleChangeSearch = (e) => {
        const { name, value, checked } = e.target
        name === "search" ? props.search(value) : props.updateCheckBox(checked)
    }

    return (
        <div>
            <h3 style={{textAlign:"center"}}>Search</h3>
            <form>
                <input className="searchBar" name="search" type="text" value={props.searchInState} onChange={handleChangeSearch} />
                <label htmlFor="showStock">Only show products on stock</label>
                <input type="checkbox" name="showStock" checked={props.showOnlyOnStock} onChange={handleChangeSearch} />
            </form>
            
        </div>
    )
}

export default SearchBar
