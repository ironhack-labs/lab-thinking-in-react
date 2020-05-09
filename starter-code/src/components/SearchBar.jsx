import React from 'react';

function SearchBar({ searchHandler, checkHandler }) { // it needs to be an object here to pass it to component

        return (
            <div>
                    <label>Search</label>
                <br />
                {/* We could do it with a class with "this.props." but we are going to do it
                with a function, and the only component that contains BOTH
                the searchbar and the table is the FilterableProductTable,
                so we can now transform this class into a function to
                pass arguments to it from FilterableProductTable */}
                    <input onChange={searchHandler} className="search-input" type="text" name="search" />
                    <br />
                    <br />
                    <input onChange={checkHandler} type="checkbox" />
                    <label>Only show products on stock</label>
            </div>
        );
}

export default SearchBar;