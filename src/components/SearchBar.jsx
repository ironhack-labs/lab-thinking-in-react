import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        searchValue : ""
    }

    handleValue = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleChange = (event) => {

        const value =
        event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;
            console.log(value);
    const name = event.target.name;

    this.setState({ [name]: value });

    this.props.handleFilter(value);
    }

    render() {
        return (
            <div>
               <form>
                    <label>Search</label>
                    <input onChange={(e) => this.props.handleFilter(e.target.value)} name="searchValue" type="text" name="search" placeholder="Type here" />
                    <br></br>
                    <input type="radio"/> <span>Only show products in stock</span>
                </form>
            </div>
        )
    }
}
