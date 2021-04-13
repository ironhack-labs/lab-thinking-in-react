import React from 'react';

function SearchBar() {
    return (
        <div className="SearchBar container mb-3 mt-3">
            <form>
                <div className="row g-3">
                    <label for="inputEmail4" className="form-label">Search</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="row ms-5 justify-content-center">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;