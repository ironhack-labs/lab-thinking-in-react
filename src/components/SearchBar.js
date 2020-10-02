import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            showInStock: true
        }
    }

    handleChange = async (event) => {
        await this.setState({
            search: event.target.value
        })

        this.submit();
    }

    inStockToggle = async () => {
        await this.setState({
            showInStock: !this.state.showInStock
        })

        this.submit();
    }

    submit = () => {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div>
                <h3>Search</h3>
                <input onChange={this.handleChange} type="text" placeholder="search" value={this.state.search}/><br/>
                <input onChange={this.inStockToggle} type="checkbox" id="show-in-stock"/><label name="show-in-stock">Only show in stock products</label><br/>
            </div>
        )
    }
}