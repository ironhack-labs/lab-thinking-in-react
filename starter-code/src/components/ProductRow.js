import React, { Component } from 'react';

class ProductRow extends Component {
    render(){
        const { product } = this.props;
        let productStocked = {
            color: product.stocked ? " " : "red"
        }
        return(
            <tr style={productStocked}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

export default ProductRow;