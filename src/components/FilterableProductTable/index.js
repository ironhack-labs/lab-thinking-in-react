import React, { Component } from 'react'
import Products from '../ProductTable/'
import Search from '../SearchBar/'

class FilterTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [...props.products]
        }
    }
        
    checkProduct = (search, stock)=> {
        let filtered = this.props.products.filter((elm)=>
            elm.name.toLowerCase().includes(search.toLowerCase())  && (stock ? elm.stocked : elm.stocked || !elm.stocked)) 

        this.setState({
            products: filtered
        })
    }
        
    

    render() {

        return (
            <>
                <Search checkProduct={this.checkProduct}/>
                <Products products={this.state.products} />
            </>
        )
    }
}

export default FilterTable