import React, {Component} from 'react'
import data from '../data.json'
import ProductRow from './productRow'
import SearchBar from './searchBar'

class ProductTable  extends Component {
    constructor() {
        super()
        this.state = {products: data.data}
    }

searchProducts = word => {
    let results = []
    data.data.find(elm => {
        if (elm.name.includes(word))
        {
        results.push(elm)
        }
        return ''
    })
    this.setState({
        products: results
    })
    
}

    render() {
        return (
            <div className = "container">
                <SearchBar searchProducts = {this.searchProducts}/>
                <article className = "productTableTitle">
                <div className = "row">
                    <div className ="col-6">
                        Name
                    </div>
                    <div className ="col-6">
                        Price
                    </div> 
                </div>
                </article>                  
            {this.state.products.map((elm, idx) => <ProductRow key = {idx} {...elm}/>)}
            </div>
        )
    }
}

export default ProductTable

