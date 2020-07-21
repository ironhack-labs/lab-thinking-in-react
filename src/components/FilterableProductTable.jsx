import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export class FilterableProductTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchBar: '',
            filteredStocked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = ({target}) => {
        this.setState(state => {
            if (target.type === 'checkbox') {
                return ({
                    ...state,
                    filteredStocked: target.checked
                })
            } else {
                return ({
                    ...state,
                    searchBar: target.value
                })
            }

        })
    }
    render() {
        return (
            <div className='d-flex flex-column align-items-center'>
                <h1>IronStore</h1>
                <SearchBar handleChange={this.handleChange} value={this.state.searchBar} />
                <ProductTable products={this.props.products} state={this.state} />           
            </div>
        )
    }
}

export default FilterableProductTable
