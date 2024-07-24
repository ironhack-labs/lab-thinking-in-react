import React from 'react'

function SearchBar({sortByPrice, inStock, showStockOnly, searchText, searchList}) {
    return (
        <div>
            <div className="searchInput">
                <label htmlFor="search-bar" id='search-label'> Search </label>
                <input name='search-bar' type="text" className="searchBar" value={searchText} onChange={(e) => searchList(e.target.value)}/>
            </div>
            <div className="searchFilters">
                <div id="stock-only">
                    <input type="checkbox" name='in-stock' checked={inStock} onChange={showStockOnly}/>
                    <label htmlFor="in-stock">Show in Stock only</label>
                </div>
                <button onClick={sortByPrice}>Sort by Price</button>
            </div>
        </div>
    )
}

export default SearchBar