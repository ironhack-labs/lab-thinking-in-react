import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            onlyStocked: false
        }
    }
    
    handleInputChange = e => {
        const name = e.target.name
        this.setState({ name: e.target.value })
        this.props.filterProducts(e.target.value)
    }
    handleCheckboxChange = e => {
        this.setState({onlyStocked: e.target.checked})
    }

    render() {
        return (
            <form action="">
                <label>Search</label>
                <imput type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />
                
                <label>Only show products on stock</label>
                <input type="checkbox" onChange={this.handleCheckboxChange} name="onlyStocked" checked={this.state.stocked} />
          </form>
        )
    }
}

export default SearchBar