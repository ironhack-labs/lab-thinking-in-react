import React, { Component } from 'react'
import data from '../../data.json'
import ProductTable from './ProductTable/ProductTable'
import SearchBar from './SearchBar/SearchBar'


class FilterableProductTable extends Component {
    constructor() {
        super()
        this.state = {
            product: { data },
            text: ''
        }
    }

    componentDidMount() {
        console.log(this.state.product)
    }

    filter(event) {
        let text = event.target.value
        const data = this.state.product.data.data

        const newData = data.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        this.setState({
            product: newData,
            text: text,
        })
    }

    render() {
        return (
            <>
                <h1>IronStore</h1>
                <input className="form-control" value={this.state.text} onChange={(text) => this.filter(text)} />
                <ProductTable products={data} />
            </>
        )
    }
}

export default FilterableProductTable

