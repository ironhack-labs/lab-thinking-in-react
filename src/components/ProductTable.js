import './ProductTable.css'
import { Component} from 'react'
import productFromApi from './data.json'
import React from 'react';
import ProductRow from './ProductRow';
import SearchBar from './SearchBar'

const productListCopy = JSON.parse(JSON.stringify(productFromApi))

class ProductTable extends Component {

    constructor () {

        super()
        this.state = {
            products: productFromApi.data
            
        }
    }

    filterTable(word) {

        const result = productListCopy.data.filter(elm => elm.name.toLowerCase().includes(word.toLowerCase()))

        this.setState({

            products: result
        })
    }

    render() {


        return(
            <>
            <SearchBar search={word => this.filterTable(word)}/>
            { this.state.products.map(elm => <ProductRow key={elm.id} name={elm.name} price={elm.price}/>)}
            </>
        )
    }

}

export default ProductTable