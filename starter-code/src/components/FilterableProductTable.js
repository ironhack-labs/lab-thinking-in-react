import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    constructor(props) {
        super()
        this.products = props.products.data
        this.state = {
            products: this.products,
            isCheck: false,
            text: "",

        }
        console.log(this.state.isCheck)
    }


    filterList(text, check) {
        let productsArr = this.props.products.data
        
        let findState = productsArr.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()))
        if (check) {
            findState = findState.filter(product => product.stocked)
        }
        this.setState({
            ...this.state,
            products: findState,
            text: text,
        })
    }


    searchProduct(e) {
        this.filterList(e.target.value, this.state.isCheck)
    }
    
    checkOut() {

        let check = !this.state.isCheck
        console.log(check)
        this.setState({
            ...this.state,
            isCheck: check,

        }, () => { this.filterList(this.state.text, this.state.isCheck) })
    }



    render() {

        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar searchProduct={(e) => this.searchProduct(e)} checkOut={() => this.checkOut()}>

                </SearchBar>
                <ProductTable products={this.state.products}>

                </ProductTable>
            </div>
        )
    }
}
