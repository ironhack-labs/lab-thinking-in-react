import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable'


export default class FilterableProductTable extends Component {
    state = {
      productsFiltered : this.props.products
    }

    handleCallback = (childData) =>{
        const filteredCopy = [...this.props.products].filter(item => item.name.toLowerCase().includes(childData.toLowerCase()))
        this.setState({
            productsFiltered: filteredCopy
        })
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar parentCallback={this.handleCallback} products={this.props.products}/>
                <ProductTable products={this.state.productsFiltered}/>
            </div>
        )
    }
}
