import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


class FilterableProductTable extends Component {

    state = {
        productsFilter: [],
        
    }

    componentDidMount = () => {
        this.setState({
            productsFilter: this.props.products
        })
    }


    sendInfo = (search) => {
        console.log(this.props.products)
        let productsFilter = [...this.props.products]
        productsFilter = this.props.products?.filter((elm) => elm.name.toLowerCase().includes(search.searchbar))
        if (search.checkbox)
            productsFilter = productsFilter.filter((elm) => elm.stocked)

        this.setState({
            productsFilter: productsFilter
        })

        console.log(productsFilter);

    }

render() {
    return (
        <div>
            <h1>Iron Store</h1>
            <SearchBar sendInfo={this.sendInfo} />
            <ProductTable search={this.state.productsFilter} {...this.props} />

        </div>

    )
}
}

export default FilterableProductTable