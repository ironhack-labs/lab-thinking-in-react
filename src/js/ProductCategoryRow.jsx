import React, { Component } from 'react';

class ProductCategoryRow extends Component {
    render() {
        return (
            <tr>
                <td className="category-row">{this.props.category}</td>
            </tr>
        );
    }
}

export default ProductCategoryRow;
