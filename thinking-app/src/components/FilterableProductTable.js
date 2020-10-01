import React, { Component } from 'react'

import ProductTable from './ProductTable'


class FilterableProductTable extends Component {
    constructor(props) {
        super()
        this.state = {
            search: '',
            checked: false
        }
    }

    handleInputChange = e => {
        let { name } = e.target
        let value = name === 'checked' ? e.target.checked : e.target.value
        this.setState({ [name]: value })
    }
    render() {

        return (
            <>
                <h1>IronStore</h1>
                <div>
                    <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleInputChange}></input>
                    <br></br>
                    <input type="checkbox" name="checked" value={this.state.checked} onChange={this.handleInputChange} />
                    <label>Only show products in stock</label>

                </div>

                < ProductTable state={this.state.search} checked={this.state.checked} {...this.props} />
            </>
        )
    }
}

export default FilterableProductTable