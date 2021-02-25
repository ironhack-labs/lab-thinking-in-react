import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        filterInput: '',
        inStockChecked: false,
        products: this.props.products
    }

    handleChange = (e) => {
        this.setState({
            filterInput: e.target.value
        })
        this.props.parentCallback(e.target.value)
    }


    render() {
        return (
            <div>
                <p>Search</p>
                <input type="text" value={this.state.filterInput} onChange={this.handleChange}/>
            </div>
        )
    }
}
