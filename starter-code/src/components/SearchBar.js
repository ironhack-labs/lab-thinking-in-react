import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        textToSearch: '',
        onlyProductsOnStock: true
    }

    handleSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        this.props.setFilterProducts(e.target.value);
    }

    handleCheck = (e) => {
        this.setState({
            onlyProductsOnStock: !this.state.onlyProductsOnStock
        });

        this.props.setFilterCheck(this.state.onlyProductsOnStock);
    }

    render() {
        const { textToSearch, onlyProductsOnStock } = this.state;

        return (
            <div>
                <label htmlFor='textToSearch'>Search</label>
                <input id='textToSearch' type='search' name='textToSearch' value={textToSearch} onChange={this.handleSearch}></input>
                <input id='onlyProductsOnStock' type='checkbox' name='onlyProductsOnStock' value={onlyProductsOnStock} onChange={this.handleCheck}></input>
                <label htmlFor='onlyProductsOnStock'>Only show products on stock</label>
            </div>
        )
    }
}

export default SearchBar;