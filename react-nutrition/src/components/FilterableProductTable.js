import React, { Component, Fragment } from 'react'
import ProductTable from './ProductRow&table/ProductTable'



export default class FilterableProductTable extends Component {

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

        console.log(this.props)
        return (
            <Fragment>
                <h1>IronStore</h1>
                <div>
                    <input className="input" type="text" name="search" style={{ margin: '3%' }} value={this.state.search} onChange={this.handleInputChange} />
                    <br />
                    <input type="checkbox" name="checked" value={this.state.checked} onChange={this.handleInputChange} />
                    <label>Only show products in stock</label>
                </div>
                <ProductTable state={this.state.search} checked={this.state.checked} {...this.props} />
            </Fragment>
        )
    }
}