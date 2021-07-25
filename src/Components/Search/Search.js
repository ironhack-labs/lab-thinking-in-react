//import React and stuff
import React, { Component } from "react";
//import Components

//import CSS
import './Search.css'

class Search extends Component {
    state = {
        input: '',
        checked: true,
    }

    handleChange = (event) => {
        let { name, value, type } = event.target;
        if (type === "checkbox") {
            value = event.target.checked;
        }
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <>
                <div className="search-area">

                    <label htmlFor="SearchBar">Search</label>
                    <input
                        id="SearchBar"
                        type="text"
                        placeholder="Type your Search here..."
                        value={this.state.input}
                        name="input"
                        onChange={this.handleChange}
                    />
                    <div id ="container-search">
                    <input
                        id="check"
                        type="checkbox"
                        name="checked"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="check">Only show products in stock</label>
                    </div>
                </div>
            </>
        );
    }
}

export default Search