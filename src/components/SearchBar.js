
import React, { Component } from "react";
import jsondata from '../data.json'
import ProductRow from "./ProductRow";

class SearchBar extends Component {

    state = {
        searchbar: "",
        checkbox: false
    }

    handleChange = (e) => {
        let { checked } = e.currentTarget

        this.setState({
            checkbox: checked
        }, () => this.props.sendInfo(this.state))

    }




    getSearch = (e) => {
        let searchValue = e.currentTarget.value.toLowerCase();

        this.setState({
            searchbar: searchValue

        }, () => this.props.sendInfo(this.state))

    }

    render() {
        return (
            <div>
                <div>
                    <input type="search" name="searchbar" placeholder="search" onChange={this.getSearch}></input>
                </div>
                <label>
                    Busca productos<input value="" type="checkbox" name="checkbox" onChange={this.handleChange} />
                </label>




            </div>
        );
    }

}

export default SearchBar;