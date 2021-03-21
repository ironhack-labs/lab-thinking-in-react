import React, { Component } from 'react';

class ProductRow extends Component {
constructor(props) {
    super(props)
}

    render() {
        return (
            <div>

                <tr>
                    <td>{this.props.product_from_producttable.name}</td>
                    <td>{this.props.product_from_producttable.price}</td>
                </tr>
            </div>
        )
    }
}

export default ProductRow;
