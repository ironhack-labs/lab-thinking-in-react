import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
    render() {
        const { name, price, stocked } = this.props;
        const withoutStock = {
            color: stocked ? 'black' : 'red'
        }

        return (
            <tr>
              <td className='ProductRow-td' style={withoutStock}>{name}</td>
              <td className='ProductRow-td'>{price}</td>
            </tr>
        )
    }
}

export default ProductRow;