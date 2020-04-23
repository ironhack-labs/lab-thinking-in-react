import React, { Component } from "react";
import "../App.css";

export default class SearchBar extends Component {
    
    state = {
        showOnlyInStock: false,
        searchText: ""
    }

    constructor() {
        super();
        this.chkStockedChanged = this.chkStockedChanged.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
    }

    chkStockedChanged(e) {
        // console.log(e.target.checked);
        // https://stackoverflow.com/questions/41278385/setstate-doesnt-update-the-state-immediately/41278440
        this.setState({ showOnlyInStock: e.target.checked }, () => {
            // console.log(this.state.showOnlyInStock);
            this.props.paramsUpdated(this.state.showOnlyInStock, this.state.searchText);    
        });
    }

    searchChanged(e) {
        this.setState({ searchText: e.target.value }, () => 
        this.props.paramsUpdated(this.state.showOnlyInStock, this.state.searchText));
    }

    render() {
        return (
            <div className="SearchBarMainDiv">
                <div>Search</div>
                <input className="SearchBarSearch" type="search" onChange={(e) => this.searchChanged(e)} />
                <div>
                    <input type="checkbox" onChange={(e) => this.chkStockedChanged(e)} />
                    <span>Only show products on stock</span>
                </div>
            </div>
        );
    }
}