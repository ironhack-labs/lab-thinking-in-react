import React, { Component } from 'react';

class ProductRow extends Component {
    render () {
        const { product } = this.props;
        let styleStocked = {
            color: product.stocked ? "" : "red"
        }
        return(
            <tr style={styleStocked}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
};

export default ProductRow;