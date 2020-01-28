import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchValue: this.props.searchValue,
        showJustStocked: false 
    }

    handleSearch = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        })
        this.props.searchHandler(value);
    }

    handleCheckbox = (event) => {
        let {name, checked} = event.target;
        this.setState({
            [name]: checked
        })
        this.props.stockedHandler(checked);
    }

    render() {
        return (
            <div className="SearchBar">
                <div>Search</div>
                <input name="searchValue" type="text" value={this.state.searchValue} onChange={this.handleSearch}></input>
                <div><input name="showJustStocked" type="checkbox" checked={this.state.showJustStocked} onChange={this.handleCheckbox} /> AddCheckbox Only show products on stock</div>
            </div>
        )
    }
}
