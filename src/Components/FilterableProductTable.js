import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: this.props.products
        }
    }
    filterResult = (name) => {
        console.log(name, this.state.product);

        this.setState({
            product: this.props.products.filter(elm => elm.name.includes(name))
        })

    }


    render() {


        return (
            <div>
                <SearchBar filter={this.filterResult} />
                <ProductTable products={this.state.product} />
            </div>
        )
    }
}
