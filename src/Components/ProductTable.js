import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <ProductRow 
                product={ this.props.product }
                query={ this.props.query }       
                />
            </div>
        )
    }
}

