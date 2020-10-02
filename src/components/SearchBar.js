import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    handleChange = async (event) => {
        await this.setState({
            search: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Search</h3>
                <input onChange={this.handleChange} type="text" placeholder="search" value={this.state.search}/><br/>
                <input type="checkbox" id="show-in-stock"/><label name="show-in-stock">Only show in stock products</label><br/>
            </div>
        )
    }
}