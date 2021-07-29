import React from 'react';

function SearchBar (props) {
    return (
        <div className="row mt-3">
            <form >
                <h5>Search</h5>
                <input onChange={(event) => props.onSearch(event.target.value)} class="form-control me-2" type="search" aria-label="Search" />
                <input className="my-3" type="checkbox" id="stocked" name="stocked" />
                <label className="mx-2" for="stocked">Only show product on stock</label>
            </form>
        </div>
    )
}

export default SearchBar 