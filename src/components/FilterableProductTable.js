import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this)
        this.state = {
            products : this.props.products
        }
    }

    handleSearch(searchString, onlyStocked) {
        //let productsClone = JSON.parse(JSON.stringify(this.state.products))
        //if (!contactsClone.some(contact => contact.id === contactToAdd.id))
        console.log(searchString)
        let productsResult = this.state.products.filter(product => {

            if (onlyStocked) {
                return (
                    product.name.toLowerCase().includes(searchString.toLowerCase()) &&
                    product.stocked===true
                );
            } else {
                return product.name.toLowerCase().includes(searchString.toLowerCase())
            }
            
        })

        this.setState({
            products: productsResult
        })

    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>      
                <SearchBar filterProducts={this.handleSearch}/>  
                <ProductTable products={this.state.products}/>
            </div>
        )
    }
}
