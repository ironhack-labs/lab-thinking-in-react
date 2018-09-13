import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        return (
            <tr className="rows">
                {this.props.stocked === false ? (
                    <td style={{ color: '#f06261' }}>{this.props.name}</td>
                ) : (
                    <td>{this.props.name}</td>
                )}
                <td>{this.props.price}</td>
            </tr>
        );
    }
}

export default ProductRow;
