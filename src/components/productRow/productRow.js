import React, { Component } from 'react';
import './productRow.css'

class ProductRow extends Component {
    render() {
        const products = this.props.products;
    

        return (
        <>
            {products}
        </>
        );
    }
}

export default ProductRow