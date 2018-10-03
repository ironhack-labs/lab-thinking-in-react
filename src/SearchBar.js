import React from 'react';

class SearchBar extends React.Component {

    handleSearch(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={e => this.handleSearch(e)}></input>
                <input type="checkbox" name="stock" id="stock" />
                <label htmlFor="stock">Only show products in stock</label>
            </div>
        )
    };
};

export default SearchBar;