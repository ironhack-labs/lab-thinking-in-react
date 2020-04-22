import React, { Component } from 'react';
import './SearchBar.css';

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
            <div className='SearchBar'>
                <label htmlFor='textToSearch'>Search</label>
                <input className='SearchBar-input' id='textToSearch' type='text' name='textToSearch' value={textToSearch} onChange={this.handleSearch}></input>
                <div className='SearchBar-check'>
                    <input id='onlyProductsOnStock' type='checkbox' name='onlyProductsOnStock' value={onlyProductsOnStock} onChange={this.handleCheck}></input>
                    <label htmlFor='onlyProductsOnStock'>Only show products on stock</label>
                </div>
            </div>
        )
    }
}

export default SearchBar;