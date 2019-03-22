import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductRow from './ProductRow';

import data from '../data.json'

export default class FilterableProductTable extends Component {

    constructor() {
        super()
        this.state = {
            products: data.data,
            searchState : ""
        }
    }

handleSearch = (word) => {
    this.setState({
        searchState : word
    })
}




    render() {

        let productsToPrint = this.state.products.slice()

            if (this.state.searchState.length>0) {
                productsToPrint = productsToPrint.filter(elem => {
                   return elem.name.toLowerCase().includes(this.state.searchState.toLowerCase())

                })
            }

        console.log(productsToPrint)    
            

        return (
             <section className = "container" >
                <SearchBar method={this.handleSearch}/>
                    <div className = "list" >


                    {productsToPrint.map((product, idx) => {
                            return <ProductRow key = { idx } {...product }/>
                        })}


                    </div>
            </section>
        )
    }
}