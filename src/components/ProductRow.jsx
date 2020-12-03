
import React from 'react';
import data from '../data.json'

class ProductRow extends React.Component { 
render() {
    return (
        // <h1> {this.products.name} </h1> 
        <tr>
        <td>{this.props.product.name}</td> 
        <td> {this.props.product.price}</td> 
        </tr>) 
    
}
}

export default ProductRow