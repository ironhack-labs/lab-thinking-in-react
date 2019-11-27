import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export class FilterableProductTable extends Component {

    state = {
        CurrentProducts: []
    }

    componentDidMount() {
        this.setState({ CurrentProducts: this.props.products });
    }

    handleSearch = evt => {
        //const copy = [...this.state.CurrentProducts]
        const filteredProds = this.props.products.filter(prod => prod.name.toUpperCase().includes(evt.target.value.toUpperCase()));
        this.setState({ CurrentProducts: filteredProds })
    }

    render() {
        return (
            <>
                <header>
                    <h1>Iron Store</h1>
                </header>

                < SearchBar clbk={this.handleSearch} />

                <ProductTable products={this.state.CurrentProducts} />
            </>
        )
    }
}

export default FilterableProductTable
