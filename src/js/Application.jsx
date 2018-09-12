import React from 'react'

import Products from "../assets/data.json"
import FilterableProductTable from "./FilterableProductTable"



class Application extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: Products.data,
            showStockedOnly: false,
            search: ""
        }    
        
        this._handleSearch = this._handleSearch.bind(this)
        this._updateProducts = this._updateProducts.bind(this)
        this._handleStocked = this._handleStocked.bind(this)
    }

    _updateProducts(search, showStockedOnly){
        let searchProducts = []
        Products.data.forEach(product=>{
            if(product.name.toLowerCase().indexOf(search.toLowerCase()) >=0){
                console.log(showStockedOnly)
                if (product.stocked&&showStockedOnly) searchProducts.push(product)
                else if(!showStockedOnly) searchProducts.push(product);
            }
        })

        this.setState({
            products: searchProducts
        })
    }

    _handleSearch(e) {
        console.log(e.target.value)
        let searchProducts = []
        this._updateProducts(e.target.value, this.state.showStockedOnly)
        this.setState({
            search: e.target.value
        })
    }

    _handleStocked(e) {
        this._updateProducts(this.state.search, e.target.checked)
        this.setState({
            showStockedOnly: e.target.checked
        })
    }

    render() {
        let products = this.state.products;
        let categories = []

        //make array of existing categories
        products.forEach(product=>{

            if (!categories.includes(product.category)){
                categories.push(product.category)
            }

        })
                    
        return (
            <div className="container">
                <FilterableProductTable handleSearch= {this._handleSearch} handleStocked = {this._handleStocked} products={products} categories={categories}/>         
            </div>
        )
    }








}

export default Application