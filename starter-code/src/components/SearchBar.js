import React, { Component } from "react";
import "../App.css";

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            query: ""
        };
    }

    handleChange = event => {
        event.preventDefault();
        let searchWord = event.target.value;
        this.props.filterData(searchWord);
    };

    render() {
        console.log(this.props)
        return (
            <div className="SearchBar">
                <input type="search" onChange={this.handleChange} />
                <form>
                    <input type="checkbox" /> Only show products in stock
        </form>
            </div>
        );
    }
}

export default SearchBar;

