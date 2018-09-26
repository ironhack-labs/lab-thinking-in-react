import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
    state = {
        searchString: "",
        showStockOnly: false
    };

    handleChange = (event) => {
        let { name, value } = event.target;

        if(name === "showStockOnly" && value === "on"){
            value = !this.state[name];

            this.setState({[name]: value});
            return;
        }

        this.setState({[name]: value});
        this.props.changeInput(value);
    };

    render() {
        return (
            <div className="search-wrapper">
                <div className="form-group">
                    <label htmlFor="product_name">Product name:</label>
                    <input type="text" className="form-control" id="product_name" name="searchString" onChange={ this.handleChange } value={ this.state.searchString } placeholder="Search..." />
                </div>
                <div className="checkbox">
                    <label><input className="checkbox" checked={ this.state.showStockOnly } name="showStockOnly" onChange={ this.handleChange } type="checkbox"/>Only show products in stock.</label>
                </div>
            </div>
        );
    }
}

export default SearchBar;