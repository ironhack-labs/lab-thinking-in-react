import React from 'react'
import { Component } from 'react'

class FilterableProductTable extends Component {
    constructor() {
        this.state = {}
    }

    filterTable(word) {

        const result = productListCopy.data.filter(elm => elm.name.toLowerCase().includes(word.toLowerCase()))

        this.setState({

            products: result
        })
    }

    render() {
        return (
        <div></div>
        )
    }
}

export default FilterableProductTable