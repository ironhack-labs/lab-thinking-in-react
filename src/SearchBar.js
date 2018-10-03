import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input type="text"></input>
                <input type="checkbox" name="stock" id="stock" />
                <label htmlFor="stock">Only show products in stock</label>
            </div>
        )
    };
};

export default SearchBar;