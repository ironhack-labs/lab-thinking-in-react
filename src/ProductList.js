import { Component } from "react"
import React from 'react';
import products from './data.json'
import ProductCard from './ProductCard'
import Search from "./Search";


class DynamicContactList extends Component {

    constructor() {
        super()
        this.state = {
            currentProducts: products.data

        }
    }

    searchProduct = product => {

        console.log(product)
        //filtter o algo
        let temp = [...this.state.currentProducts]
        console.log(temp);

        // this.state.currentProducts: product.data.filter(elm => elm.includes(product))
        // this.setState({
        //     currentProducts: temp.filter(elm => elm.name.includes(product))
        // })


        if (product == '' || this.state.currentProducts.length == 0) {
            this.setState({
                currentProducts: products.data
            })
        } else {
            this.setState({
                currentProducts: temp.filter(elm => elm.name.includes(product))
            })
        }


    }



    render() {

        return (
            <>

                <Search searchProduct={this.searchProduct} />

                {this.state.currentProducts.map(elm => <ProductCard {...elm} name={elm.name} />)}



            </>
        )
    }
}

export default DynamicContactList