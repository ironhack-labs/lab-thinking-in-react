import React from 'react';

const SearchBar = ({onSearch, search}) => {
    return (
        <div className="SearchProduct">
            <form>
                <div className="form-group">
                    <input
                        type="search" className="form-control mb-2" name="search__product"
                        id="search__product" placeholder="Search product..." autoComplete="off"
                        onChange={(e) => onSearch(e)} value={search}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;