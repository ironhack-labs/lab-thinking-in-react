import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        const { name, price, stocked } = this.props;
        const withoutStock = {
            color: stocked ? 'black' : 'red'
        }

        return (
            <tr>
              <td style={withoutStock}>{name}</td>
              <td>{price}</td>
            </tr>
        )
    }
}

export default ProductRow;