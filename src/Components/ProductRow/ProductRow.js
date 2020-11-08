import React from 'react';
import './ProductRow.css';

class ProductRow extends React.Component {

    render() {
        return(
            <tr>
            <td className={(!this.props.productRow.stocked ? 'outOfStock': 'inStock')}>{ this.props.productRow.name }</td>
            <td className={(!this.props.productRow.stocked ? 'outOfStock': 'inStock')}>{ this.props.productRow.price }</td>
            </tr>
        );
    }
}

export default ProductRow;