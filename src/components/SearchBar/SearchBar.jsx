import React from 'react';
import './SearchBar.css'

function SearchBar({value, onChange}) {
    return (
        <div className="SearchBar container mb-3 mt-3">
            <form>
                <div className="row g-3">
                    <label htmlFor="search" className="form-label">Search</label>
                    <input type="text" className="form-control" id="search" value={value} onChange={onChange}/>
                </div>
                <div className="row g-3">
                    <div className="form-check checkbox">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;