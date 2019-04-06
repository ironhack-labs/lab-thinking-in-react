import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        const { stocked, name, price } = this.props.product;
        const nameStyle = stocked ? { color: 'black' } : { color: 'red' };
        return this.props.checked ? (
            stocked ? (
            <tr className="ProductRow">
                {/* first curly brace is recognizing javascript, second curly brace is passing color as an object
                becuase that is the only way you can pass, as an object */}
                <td style={ nameStyle }> { name } </td>
                <td> { price } </td>
                <td> { stocked ? "Yes" : "No" } </td>
            </tr>
            ) : (
                ''
            )
            ) : (
                <tr className="ProductRow">
                    <td style={ nameStyle }> { name } </td>
                    <td> { price } </td>
                    <td> { stocked ? "Yes" : "No" } </td>
                </tr>
        );
    }
}

export default ProductRow;