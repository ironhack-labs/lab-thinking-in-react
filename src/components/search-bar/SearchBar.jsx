import { useState } from "react";


function SearchBar({ onSearchTerm, onCheck }) {
    

    return (
        <div className="container">
            <h5>Search</h5>
            <div className="input-group justify-content-center mb-3 ">
                <input 
                type="text" 
                className=" col-6 col-md-4 form-control"
                onChange={onSearchTerm} 
                placeholder="Search" 
                 />
            </div>
            <div>
                <input onChange={onCheck} type="checkbox"/>
                <label >Only show products in stock</label>
            </div>


        </div>
    )
}

export default SearchBar