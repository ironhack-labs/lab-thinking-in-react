import React from 'react';
import './ProductRow.css';

export default class ProductRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            price: this.props.price,
            onStock: this.props.stocked,
        }
    }

    render() {
        return (
            <>
                <tr>
                    <td className={this.state.onStock ? `on-stock` : `not-on-stock`}>{this.state.name}</td>
                    <td>{this.state.price}</td>
                </tr>
            </>
        )
    }
}