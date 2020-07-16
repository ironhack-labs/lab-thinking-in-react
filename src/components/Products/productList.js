import React, { Component } from 'react'
import ProductCard from './productCard'
import Navigation from '../NavBar/navigation'


class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: props.products
        
            
        }
    }

    handleSearch = (search) => { 
        
        const filtered = this.props.products.filter((elm) => elm.name.toLowerCase().includes(search)) 

        this.setState({product:filtered})

    }
   

    render() {
        console.log (this.props, 'este es')
        return (
            
            <>
                <Navigation handleSearch={this.handleSearch} />
                
                {this.state.product.map((elm, idx) => <ProductCard {...elm} key={idx} />)}
            </>
        )
    }
}

export default ProductList
                







