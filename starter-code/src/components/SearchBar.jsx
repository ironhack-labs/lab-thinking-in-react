import React, { Component } from "react";

class SearchBar extends React.Component {
    state = {
        name: ""
    };

    updateForm(e) {
        const { name, value } = e.target
        console.log(value)
        this.props.searchProduct(value)
        this.setState({
            [name]: value
        });  
    }

    render() {
        return (
            <form>
                <input
                    type="search"
                    placeholder="Type Search"
                    value={this.state.name}
                    name="name"
                    onChange={e => this.updateForm(e)}
                />
            </form>
        )
    }
}

export default SearchBar;