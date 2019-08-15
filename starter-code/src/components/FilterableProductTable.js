import React, { Component } from 'react'

import ProductRow from './ProductRow'
import ProductTable from './ProductTable'
import SearchBar from './Search'
import Checkbox from '.Checkbox'
import data from '../data.json'

class FilterableProductTable extends Component {
    constructor(props) {
        super(props)

        this.state = {

            products: data.data,
            copy: data.data
        }
    }

    findProducts = search => {
        console.log(search)
        let copyproducts = [...this.state.copy]

        copyproducts = copyproducts.filter(elm => {
            return elm.name.toLowerCase().includes(search.toLowerCase())
        })

        this.setState({
            products: copyproducts
        })

    }

    toggleProducts = () => this.setState({ stocked: !this.state.stocked })

    render() {
        return (
            <div className="container text-center">
                <h1 className="marg-bot">IronStore</h1>
                <SearchBar findProducts={this.findProducts} />
                <ProductTable />
                {
                    this.state.products.map((elm, idx) => {
                        return <ProductRow key={idx} name={elm.name} price={elm.price}></ProductRow>

                    })
                }
            </div>
        )
    }

}

export default FilterableProductTable