import React from 'react';

export default function SearchBar({
    searchProduct,
    handleSearch,
    handleCheck,
    checkOnStock
}) {
    return (
        <div className="searchbar">
            {/* <h4>Search</h4> */}
                <form>
                    <input 
                        className="searchbox"
                        placeholder="Search"
                        type="text"
                        value={searchProduct}
                        onChange={handleSearch}
                    />
                    <br/>
                    <input
                        className="checkbox"
                        type="checkbox"
                        name="vehicle1"
                        checked={checkOnStock} 
                        onChange={handleCheck}
                    /> Only show products on stock
                </form>
                
                {/* checkbox */}
        </div>
    )
}
