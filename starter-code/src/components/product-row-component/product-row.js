import React from 'react';
import './product-row.css';

class ProductRow extends React.Component {
    render() {
    return (
        <tr className={this.props.product.stocked ? "stocked":"unstocked"}>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.price}</td>
        </tr>
    )
    }
}
export default ProductRow;