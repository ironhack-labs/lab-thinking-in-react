import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            stock: false
        }
    }
    handleInputChange = e => {
        
        this.setState({ search: e.target.value}, () => this.props.checkProduct(this.state.search, this.state.stock))
    }
        
    handleStock = e => {
        this.setState({stock: e.target.checked}, ()=> this.props.checkProduct(this.state.search, this.state.stock))
    }

    render() {
        return (
            <>
                <input type='search' value={this.state.search} onChange={this.handleInputChange} />
                <label> <input type= 'checkbox' value={this.state.stock} onChange = {this.handleStock}/></label>
            </>
        )
    }
}

export default SearchBar